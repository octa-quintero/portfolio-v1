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
  colStart,
  colSpan,
  rowStart,
  rowSpan,
}: CardInformationInterface) {
  const { t } = useTranslation();

  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} w-full max-w-full aspect-ratio`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -80, filter: "blur(30px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      className={`relative ${background} ${gridClasses} flex flex-col md:flex-row rounded-2xl transition w-full h-full z-50 p-7 md:p-7`}
    >
      <div className="border-gradient-animation absolute inset-0 rounded-xl"></div>
      <div className="border-shadow-animation absolute inset-0 rounded-xl"></div>

      <div
        className="flex absolute inset-0 z-0 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/f5/95/bf/f595bf962e7231c2c42fd896d3eb9316.gif')`,
          opacity: 0.08,
        }}
      ></div>

      {/* Sección de texto */}
      <div
        className="flex flex-col justify-end items-start w-full md:w-1/2 h-full p-3 md:p-3 z-10 rounded-l-2xl max-sm:w-full max-sm:h-full max-sm:items-left max-sm:justify-center max-sm:text-center"
        style={{ fontFamily: 'MyFont' }}
      >
        <p className="text-left text-xl md:text-3xl text-white font-italic m-0 max-sm:text-lg">{name ? t(name) : ''}</p>
        <p
          className="text-left text-3xl md:text-5xl text-white font-semibold m-0 max-sm:text-xl"
          style={{ fontFamily: 'MyFont' }}
        >
          {t(title)}
        </p>
        <p
          className="font-quicksand font-bold text-lg md:text-xl text-white max-sm:text-md max-sm:text-left"
          style={{ fontFamily: 'MyFont1' }}
        >
          {t(text)}
        </p>
      </div>

      {/* Imagen (oculta en móviles) */}
      <div
        className="flex flex-col justify-start items-start w-1/2 h-full p-0 z-10 rounded-l-2xl max-sm:hidden"
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
