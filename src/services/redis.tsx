import Redis from 'ioredis';

// Conexión a Redis
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379'), // Puerto por defecto
  password: process.env.REDIS_PASSWORD || undefined,
});

// Función para almacenar tokens en Redis con expiración
export async function storeTokensInRedis(accessToken: string, refreshToken: string) {
  const accessTokenExpireTime = 3600; // Expiración de 1 hora para el access_token
  const refreshTokenExpireTime = 60 * 60 * 24 * 30; // Expiración de 30 días para el refresh_token

  await redis.set('spotify:access_token', accessToken, 'EX', accessTokenExpireTime);
  await redis.set('spotify:refresh_token', refreshToken, 'EX', refreshTokenExpireTime);
}

// Función para obtener los tokens desde Redis
export async function getTokensFromRedis() {
  const accessToken = await redis.get('spotify:access_token');
  const refreshToken = await redis.get('spotify:refresh_token');

  return { accessToken, refreshToken };
}

// Función para eliminar los tokens de Redis (por ejemplo, al hacer logout)
export async function deleteTokensFromRedis() {
  await redis.del('spotify:access_token');
  await redis.del('spotify:refresh_token');
}

// Función para almacenar la última canción escuchada en Redis
export async function storeLastSongInRedis(
  songId: string,
  artist: string,
  songName: string,
  album?: string,
  duration?: number
) {
  const key = 'spotify:last_song'; // Usamos una clave fija para la última canción escuchada
  const songData = { songId, artist, songName, album, duration };

  // Almacenar la nueva canción, si no hay una canción guardada previamente
  const existingSong = await redis.get(key);
  if (!existingSong) {
    await redis.set(key, JSON.stringify(songData));
  } else {
    // Si ya existe, solo actualizamos
    await redis.set(key, JSON.stringify(songData));
  }
}

// Función para obtener la última canción escuchada desde Redis
export async function getLastSongFromRedis() {
  const key = 'spotify:last_song';
  const songData = await redis.get(key);

  return songData ? JSON.parse(songData) : null;
}
