import { NextResponse } from 'next/server';
import { fetchSpotifyData, storeSpotifyTokens } from '../../../../services/spotify';

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    const { NEXT_PUBLIC_SPOTIFY_CLIENT_ID, NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET, NEXT_PUBLIC_SPOTIFY_REDIRECT_URI, SPOTIFY_TOKEN_URL } = process.env;

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      client_secret: NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
      redirect_uri: NEXT_PUBLIC_SPOTIFY_REDIRECT_URI!,
    });

    // Solicitar tokens de Spotify
    const data = await fetchSpotifyData(SPOTIFY_TOKEN_URL!, 'POST', body);

    // Almacenar los tokens en Redis
    await storeSpotifyTokens(data.access_token, data.refresh_token);

    // Responder con los tokens
    return NextResponse.json({ access_token: data.access_token, refresh_token: data.refresh_token });
  } catch (error) {
    console.error('Error fetching Spotify token:', error);
    return NextResponse.json({ error: 'Failed to fetch Spotify token' }, { status: 500 });
  }
}
