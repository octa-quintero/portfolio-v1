'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarInterface {
  image: string;
  title: string;
  background?: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
  projects: unknown[]; // Recibe los proyectos filtrados
}

export default function Navbar({
  image,
  title,
  background,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
  projects, // Recibe los proyectos filtrados
}: NavbarInterface) {
  const { t } = useTranslation();

  const projectCount = projects.length; // Contamos los proyectos

  const gridClasses = `col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`;

  return (
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className={`relative ${background} ${gridClasses} flex rounded-2xl transition w-full max-w-[100%] mx-auto h-60 z-60 overflow-hidden`}
>
  <div className="border-gradient-animation absolute inset-0 rounded-xl"></div>
  <div className="border-shadow-animation absolute inset-0 rounded-xl"></div>

  <div className="flex w-full h-full p-10 z-10 justify-between items-center max-sm:p-10">
    <div className="flex items-center gap-12 max-sm:gap-6">
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <FaArrowLeft className="w-14 h-14 text-white max-sm:w-10 max-sm:h-10" style={{ strokeWidth: 0.5 }} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-left text-7xl text-white font-semibold m-0 max-sm:text-5xl">
          {t(title)} <span className="text-7xl text-zinc-400 opacity-40 max-sm:text-5xl">{projectCount}</span>
        </p>
      </div>
    </div>

    <div
      className="flex items-center justify-center w-36 h-36 rounded-2xl overflow-hidden max-sm:w-24 max-sm:h-24"
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
