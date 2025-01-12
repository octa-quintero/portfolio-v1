import { storeTokensInRedis, getTokensFromRedis } from './redis';
import Redis from 'ioredis';

// Conexión a Redis
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD || undefined,
});

// Función para hacer solicitudes a Spotify
export async function fetchSpotifyData(url: string, method: string, body?: URLSearchParams, accessToken?: string) {
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from Spotify: ${url}`);
  }

  return response.json();
}

// Función para almacenar los tokens en Redis
export async function storeSpotifyTokens(accessToken: string, refreshToken: string) {
  await storeTokensInRedis(accessToken, refreshToken);
}

// Función para obtener los tokens desde Redis
export async function getSpotifyTokens() {
  const { accessToken, refreshToken } = await getTokensFromRedis();
  if (!accessToken || !refreshToken) {
    throw new Error('Tokens not found in Redis');
  }
  return { accessToken, refreshToken };
}

// Función para obtener el access_token utilizando el refresh_token
export async function refreshAccessToken() {
  try {
    const { refreshToken } = await getSpotifyTokens();
    const { NEXT_PUBLIC_SPOTIFY_CLIENT_ID, NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET, SPOTIFY_TOKEN_URL } = process.env;

    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      client_secret: NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
    });

    // Solicitar un nuevo access_token
    const data = await fetchSpotifyData(SPOTIFY_TOKEN_URL!, 'POST', body);

    // Almacenar el nuevo access_token en Redis
    await storeSpotifyTokens(data.access_token, refreshToken);

    return { access_token: data.access_token };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Failed to refresh access token');
  }
}

// Función para obtener la actividad del usuario (última canción escuchada)
export async function getUserActivity() {
  try {
    let { accessToken } = await getSpotifyTokens();
    if (!accessToken) {
      // Refrescar el token si no está disponible
      const { access_token: newAccessToken } = await refreshAccessToken();
      accessToken = newAccessToken;
    }

    const activityUrl = 'https://api.spotify.com/v1/me/player/currently-playing';
    const data = await fetchSpotifyData(activityUrl, 'GET', undefined, accessToken);

    if (data.is_playing) {
      const songInfo = {
        songId: data.item.id,
        artist: data.item.artists[0].name,
        songName: data.item.name,
        album: data.item.album.name,
        duration: data.item.duration_ms,
      };

      // Guardar la última canción en Redis
      await storeLastSongInRedis(songInfo);

      return songInfo;
    } else {
      return { message: 'No song is currently playing' };
    }
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw new Error('Failed to fetch user activity');
  }
}

// Función para almacenar la última canción en Redis
export async function storeLastSongInRedis(songInfo: { songId: string, artist: string, songName: string, album?: string, duration?: number }) {
  await redis.set('spotify:last_song', JSON.stringify(songInfo));
}

// Función para obtener la última canción desde Redis
export async function getLastSongFromRedis() {
  const songData = await redis.get('spotify:last_song');
  return songData ? JSON.parse(songData) : null;
}

