'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface CardInformationInterface {
  image: string;
  title: string;
  text: string;
  name?: string;
  background?: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function CardInformation({
  image,
  title,
  name,
  text,
  background,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardInformationInterface) {
  const { t } = useTranslation();

  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`relative ${background} ${gridClasses} flex rounded-2xl transition w-full h-full z-50 p-10`}
    >
      {/* Capa de borde animado */}
      <div className="border-gradient-animation absolute inset-0 rounded-xl"></div>

      {/* Nueva capa de sombra animada */}
      <div className="border-shadow-animation absolute inset-0 rounded-xl"></div>
      
      <div
        className="absolute inset-0 z-0 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/f5/95/bf/f595bf962e7231c2c42fd896d3eb9316.gif')`,
          opacity: 0.08,
        }}
      ></div>
      
      <div className="flex flex-col justify-end items-start w-1/2 h-full p-0 z-10 rounded-l-2xl" style={{ fontFamily: 'MyFont' }}>
        <p className="text-left text-3xl text-white font-italic m-0">{name ? t(name) : ''}</p>
        <p className="text-left text-5xl text-white font-semibold m-0" style={{ fontFamily: 'MyFont' }}>{t(title)}</p>
        <p className="font-quicksand font-bold text-xl text-white" style={{ fontFamily: 'MyFont1' }}>{t(text)}</p>
      </div>

      <div
        className="flex flex-col justify-start items-start w-1/2 h-full p-0 z-10 rounded-l-2xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '45%',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </motion.div>
  );
}
