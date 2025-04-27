'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';
import Image from 'next/image';
import wave from '../../../../public/wave.gif';
import { useTranslation } from 'react-i18next';  // Importamos useTranslation

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
  const { t } = useTranslation();  // Usamos useTranslation para obtener las traducciones

  const [currentTrack, setCurrentTrack] = useState<{
    song: string | null;
    artist: string | null;
    albumArt: string | null;
    trackUrl: string | null;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const defaultTrack = {
  song: 'Jugo',
  artist: 'Los Espíritus',
  albumArt: 'https://i.scdn.co/image/ab67616d0000b2732ccaa2ad26588fdc1b653c60',
  trackUrl: 'https://open.spotify.com/track/0PJPcduHwXP4NUp2rd6Kk7',
};

  

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/460652984175689743');
        if (!response.ok) throw new Error('Error al obtener los datos desde la API.');

        const data = await response.json();
        if (data?.data?.listening_to_spotify) {
          const spotify = data.data.spotify;
          setCurrentTrack({
            song: spotify.song,
            artist: spotify.artist,
            albumArt: spotify.album_art_url,
            trackUrl: `https://open.spotify.com/track/${spotify.track_id}`,
          });
        } else {
          setCurrentTrack(defaultTrack);
        }
      } catch (err) {
        setError('Hubo un error al obtener los datos de Spotify.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentTrack();
  }, []);


  // Definir clases de grid dinámicamente
  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} overflow-hidden w-full`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`${background} ${gridClasses} rounded-2xl shadow-lg flex flex-col items-center w-full h-full relative z-0`}
    >
        <div
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: currentTrack?.albumArt
              ? `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${currentTrack.albumArt})`
              : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
          }}
        />

      <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4 max-sm:p-2 group">
        {loading ? (
          <p className="text-center text-black-500">Cargando...</p>
        ) : error ? (
          <p className="text-center text-black-500">{error}</p>
        ) : currentTrack ? (
          <>
            <div className="absolute top-4 left-4 max-sm:top-2 max-sm:left-44 ">
              <div className="rounded-full group-hover:shadow-[0_0_15px_rgba(34,197,94,0.8)] group-hover:scale-110 transition-all duration-300">
                <FaSpotify
                  size={50}
                  className="text-green-500 group-hover:brightness-125 max-sm:w-9 max-sm:h-8"
                />
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-end">
              <h3 className="text-2xl max-sm:text-sm font-semibold mb-3  max-sm:mb-0">{t('recently_listened')}</h3>  {/* Usamos la traducción aquí */}
              <h3 className="text-xl  max-sm:text-xs font-semibold">{currentTrack.song}</h3>
              <p className="text-1xl  max-sm:text-sm">{currentTrack.artist}</p>

              <a
                href={currentTrack.trackUrl || '#'}
                className="text-green-500 flex items-center justify-around w-full" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-left max-sm:text-sm flex-grow text-sm md:text-lg font-semibold hover:brightness-125 transition-all">
                  {t('listen_on_spotify')}
                </span>
                <div className="relative w-32 max-sm:w-12">
                  <Image
                    src={wave}
                    alt="Visualización de onda de sonido"
                    layout="intrinsic"
                    objectFit="contain" 
                    className="max-w-full max-h-full"
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
