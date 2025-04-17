'use client';

import { useTranslation } from 'react-i18next';

export interface CardTextInterface {
  background: string;
  titleKey: string; // Cambiado para recibir claves de traducción
  mainText?: string;
  subtitleKey: string; // Cambiado para recibir claves de traducción
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
  className?: string;
}

export default function CardText({
  background,
  titleKey,
  mainText,
  subtitleKey,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardTextInterface) {
  const { t } = useTranslation();

  return (
    <div
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-[1] col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} aspect-square`}
    >
      <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <p className="text-center max-sm:text-sm text-2xl text-white light">{t(titleKey)}</p>
        <p className="text-center max-sm:text-4xl text-5xl sm:text-8xl text-white font-bold">{mainText}</p> {/* Reducido el tamaño de la fuente */}
        <p className="text-center max-sm:text-sm text-2xl text-white light">{t(subtitleKey)}</p>
      </div>
    </div>
  );
  
}
