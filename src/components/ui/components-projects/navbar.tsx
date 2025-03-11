'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa'

interface NavbarInterface {
  image: string;
  title: string;
  background?: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function Navbar({
  image,
  title,
  background,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: NavbarInterface) {
  const { t } = useTranslation();

  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`relative ${background} ${gridClasses} flex rounded-2xl transition p-4 w-full h-60 z-60`}
    >
      <div className="border-gradient-animation absolute inset-0 rounded-xl"></div>

      <div className="border-shadow-animation absolute inset-0 rounded-xl"></div>

      {/* Flecha */}

      {/* Contenedor con los tres elementos y el justify-content */}
      <div className="flex w-full h-full p-10 z-10 justify-between items-center">
  {/* Contenedor de la flecha y el título */}
  <div className="flex items-center gap-12">
    <div className="flex items-center cursor-pointer">
    <FaArrowLeft className="w-14 h-14 text-white" style={{ strokeWidth: 0.5 }} />

    </div>
    <div className="flex flex-col justify-center items-start">
      <p className="text-left text-7xl text-white font-semibold m-0">{t(title)}</p>
    </div>
  </div>

  {/* Imagen a la derecha */}
  <div
    className="flex items-center justify-center w-36 h-36 rounded-2xl overflow-hidden"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  />
</div>


      <div
        className="absolute inset-0 z-0 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/f5/95/bf/f595bf962e7231c2c42fd896d3eb9316.gif')`,
          opacity: 0.08,
        }}
      ></div>
    </motion.div>
  );
}
