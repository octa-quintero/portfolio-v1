'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  title: string;
  image: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function Navbar({ title, image }: NavbarProps) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-between w-full h-16 bg-gray-900 text-white px-6 rounded-b-2xl shadow-lg aspect-square"
    >
      {/* Flecha para ir atrás */}
      <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-gray-700 transition">
        <IoArrowBack size={24} />
      </button>

      {/* Título */}
      <h1 className="text-2xl font-semibold" style={{ fontFamily: 'MyFont' }}>{t(title)}</h1>

      {/* Imagen */}
      <div
        className="w-10 h-10 bg-cover bg-center rounded-full border border-white"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </motion.nav>
  );
}
