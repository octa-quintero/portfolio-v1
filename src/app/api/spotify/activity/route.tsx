import { NextResponse } from 'next/server';
import { fetchSpotifyData, getSpotifyTokens, storeLastSongInRedis, getLastSongFromRedis } from '../../../../services/spotify';

// Endpoint para obtener la actividad del usuario (actualmente escuchando)
export async function GET() {
  try {
    // Obtener el accessToken desde Redis
    const { accessToken } = await getSpotifyTokens();

    if (!accessToken) {
      throw new Error('No access token found');
    }

    const activityUrl = 'https://api.spotify.com/v1/me/player/currently-playing';

    // Solicitar la actividad del usuario desde la API de Spotify
    const data = await fetchSpotifyData(activityUrl, 'GET', undefined, accessToken);

if (data.is_playing) {
  const songInfo = {
    songId: data.item.id,
    artist: data.item.artists[0].name,
    songName: data.item.name,
    album: data.item.album.name,
    duration: data.item.duration_ms,
    albumImage: data.item.album.images[0]?.url || '',
    trackUrl: data.item.external_urls.spotify,
  };

  // Guardar la última canción en Redis
  await storeLastSongInRedis(songInfo);

  return NextResponse.json({
    songName: songInfo.songName,
    artistName: songInfo.artist,
    albumImage: songInfo.albumImage,
    trackUrl: songInfo.trackUrl,
  });

    } else {
      // Si no hay canción en reproducción, obtener la última canción de Redis
      const lastSong = await getLastSongFromRedis();

      if (lastSong) {
        return NextResponse.json({
          songName: lastSong.songName,
          artistName: lastSong.artist,
          albumImage: lastSong.albumImage || '',
        });
      } else {
        return NextResponse.json({ message: 'No song is currently playing and no previous song is saved' });
      }
    }
  } catch (error: unknown) {
    const typedError = error as Error; // Aserción de tipo

    console.error('Error fetching user activity:', typedError.message);
    return NextResponse.json({ error: 'Failed to fetch user activity', details: typedError.message }, { status: 500 });
  }
}
