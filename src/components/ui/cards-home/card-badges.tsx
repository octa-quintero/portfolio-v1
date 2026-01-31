'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFish, FaBolt, FaRocket } from 'react-icons/fa';

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface CardBadgesInterface {
  background?: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

const badges: Badge[] = [
  {
    id: 1,
    name: 'Pull Shark',
    description: 'x2',
    icon: <FaFish className="w-full h-full" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Quickdraw',
    description: 'Open & close issue in 5 min',
    icon: <FaBolt className="w-full h-full" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 3,
    name: 'YOLO',
    description: 'Commit to main',
    icon: <FaRocket className="w-full h-full" />,
    color: 'from-purple-500 to-pink-500',
  },
];

export default function CardBadges({
  background = '',
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardBadgesInterface) {
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentBadge = badges[currentBadgeIndex];
  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, filter: 'blur(30px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-100 ${gridClasses} aspect-square`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
        {/* Fondo con gradiente animado */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentBadge.color} opacity-20 blur-xl`}
        />

        {/* Contenedor del badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBadge.id}
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.5 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative z-10 flex flex-col items-center justify-center gap-3"
          >
            {/* Icono */}
            <div 
              className={`w-16 h-16 text-white bg-gradient-to-br ${currentBadge.color} rounded-full p-4 shadow-lg`}
              style={{
                boxShadow: currentBadge.color === 'from-blue-500 to-cyan-500' 
                  ? '0 10px 30px rgba(6, 182, 212, 0.5)' 
                  : currentBadge.color === 'from-yellow-500 to-orange-500'
                  ? '0 10px 30px rgba(249, 115, 22, 0.5)'
                  : '0 10px 30px rgba(196, 81, 245, 0.5)'
              }}
            >
              {currentBadge.icon}
            </div>

            {/* Nombre del badge */}
            <h3 className="text-center text-white font-bold text-sm max-sm:text-xs">
              {currentBadge.name}
            </h3>

            {/* Descripción */}
            <p className="text-center text-gray-300 text-xs max-sm:text-[10px] font-light">
              {currentBadge.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
