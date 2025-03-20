'use client';

import { useStore } from '@/zustand/store';
import Image from 'next/image';

interface LanguageSwitchProps {
  background?: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
  className?: string;
}

export default function LanguageSwitch({
  background = '',
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
  className,
}: LanguageSwitchProps) {
  const { language, changeLanguage } = useStore();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-100 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} ${className} aspect-square`}
    >
      <label
        className="scale-150 relative inline-block h-8 w-16 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#0a0a0acc]"
        aria-label="Switch language"
      >
        {/* Checkbox input */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={language === 'es'}
          onChange={toggleLanguage}
        />
        {/* Slider */}
        <span
          className="peer h-8 w-16 flex items-center justify-between rounded-full bg-gray-300 p-1 transition-all"
        >
          {/* Spanish flag */}
          <Image
            src="/spain.svg"
            alt="Español"
            width={25}
            height={20}
            className={`transition-all duration-500 ease-in-out ${
              language === 'es'
                ? 'opacity-100 drop-shadow-[0_0_10px_#FFD700]' // Efecto iluminado para el idioma activo
                : 'opacity-50 drop-shadow-none'
            }`}
          />
          {/* UK flag */}
          <Image
            src="/united-kingdom.svg"
            alt="English"
            width={25}
            height={20}
            className={`transition-all duration-500 ease-in-out ${
              language === 'en'
                ? 'opacity-100 drop-shadow-[0_0_10px_#1E90FF]' // Efecto iluminado para el idioma activo
                : 'opacity-50 drop-shadow-none'
            }`}
          />
        </span>
      </label>
    </div>
  );
}
