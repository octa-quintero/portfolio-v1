'use client';

import { useStore } from '@/zustand/store';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LanguageSwitchProps {
  background?: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function LanguageSwitch({
  background = '',
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: LanguageSwitchProps) {
  const { language, changeLanguage } = useStore();

  const toggleLanguage = () => {
    const languages = ['es', 'en', 'it'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
  };

  return (
    <motion.div
            initial={{ opacity: 0, x: -100, filter: "blur(30px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-100 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} aspect-square`}
    >
      <label
        className="flex justify-center scale-150 h-8 w-24 max-sm:h-6 max-sm:w-20 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#0a0a0acc]"
        aria-label="Switch language"
      >
        {/* Checkbox input */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={language !== 'es'}
          onChange={toggleLanguage}
        />
        {/* Slider */}
        <span
          className="peer h-8 w-24 max-sm:h-6 max-sm:w-20 flex items-center justify-between rounded-full bg-gray-300 p-1 max-sm:p-0.5 transition-all"
        >
          {/* Spanish flag */}
          <Image
            src="/spain.svg"
            alt="Español"
            width={25}
            height={20}
            className={`transition-all duration-500 ease-in-out max-sm:w-5 max-sm:h-5 ${
              language === 'es'
                ? 'opacity-100 drop-shadow-[0_0_10px_#FFD700]'
                : 'opacity-50 drop-shadow-none'
            }`}
          />
          {/* UK flag */}
          <Image
            src="/united-kingdom.svg"
            alt="English"
            width={25}
            height={20}
            className={`transition-all duration-500 ease-in-out max-sm:w-5 max-sm:h-5 ${
              language === 'en'
                ? 'opacity-100 drop-shadow-[0_0_10px_#1E90FF]'
                : 'opacity-50 drop-shadow-none'
            }`}
          />
          {/* Italian flag */}
          <Image
            src="/italy.svg"
            alt="Italia"
            width={25}
            height={20}
            className={`transition-all duration-500 ease-in-out max-sm:w-5 max-sm:h-5 ${
              language === 'it'
                ? 'opacity-100 drop-shadow-[0_0_10px_#00AA44]'
                : 'opacity-50 drop-shadow-none'
            }`}
          />
        </span>
      </label>
    </motion.div>
  );
  
}