'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';
import Image from 'next/image';
import wave from '../../../../public/wave.gif';

interface SpotifyCardProps {
  background: string;
  colStart: number;
  colSpan: number;
  rowStart: number;
  rowSpan: number;
}

export default function SpotifyCard({
  background,
  colStart,
  colSpan,
  rowStart,
  rowSpan,
}: SpotifyCardProps) {
  const [currentTrack, setCurrentTrack] = useState<{
    song: string | null;
    artist: string | null;
    albumArt: string | null;
    trackUrl: string | null;
  }>({
    song: null,
    artist: null,
    albumArt: null,
    trackUrl: null,
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener la canción que se está reproduciendo desde la URL
  const getCurrentPlayingTrack = async () => {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/460652984175689743');
      if (response.ok) {
        const data = await response.json();
        if (data && data.data && data.data.listening_to_spotify) {
          const spotify = data.data.spotify;
          return {
            song: spotify.song || null,
            artist: spotify.artist || null,
            albumArt: spotify.album_art_url || null,
            trackUrl: `https://open.spotify.com/track/${spotify.track_id}` || null,
          };
        } else {
          return null;
        }
      } else {
        throw new Error('Error al obtener los datos desde la URL.');
      }
    } catch (error) {
      console.error(error);
      setError('Hubo un error al obtener los datos de Spotify.');
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const trackData = await getCurrentPlayingTrack();
      if (trackData) {
        setCurrentTrack(trackData);
      } else {
        setError('No hay canción reproduciéndose.');
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  // Definir clases de grid dinámicamente
  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`${background} ${gridClasses} rounded-2xl shadow-lg flex flex-col items-center justify-between w-full h-full relative`}
    >
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full rounded-xl"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${currentTrack.albumArt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
          }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4 group">
        {loading ? (
          <p className="text-center text-gray-500">Cargando...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : currentTrack.song ? (
          <>
            <div className="absolute top-4 left-4">
              <div className="rounded-full group-hover:shadow-[0_0_15px_rgba(34,197,94,0.8)] group-hover:scale-110 transition-all duration-300">
                <FaSpotify
                  size={50}
                  className="text-green-500 group-hover:brightness-125"
                />
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-3">Escuchado Recientemente</h3>
              <h3 className="text-s font-semibold">{currentTrack.song}</h3>
              <p className="text-ls">{currentTrack.artist}</p>

              <a
                href={currentTrack.trackUrl || '#'}
                className="text-green-500 flex items-center justify-around w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-left flex-grow text-lg font-semibold hover:brightness-125 transition-all">
                  Escuchar en Spotify
                </span>
                <div className="relative w-20 h-10">
                  <Image
                    src={wave}
                    alt="Visualización de onda de sonido"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </a>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No estás reproduciendo nada en Spotify</p>
        )}
      </div>
    </motion.div>
  );
}
