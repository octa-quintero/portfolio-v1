'use client';

import { JSX } from "react";
import { useTranslation } from "react-i18next";

interface CardProjectProps {
  link: string;
  Icon: JSX.Element; // Cambiamos el tipo a `JSX.Element`
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
  titleKey: string;
  subtitleKey: string;
}

export default function CardProject({
  link,
  Icon, // Ahora es un componente JSX
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
  titleKey,
  subtitleKey,
}: CardProjectProps) {
  const { t } = useTranslation();

  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className={`text-white grid place-items-center relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`}
      style={{
        backgroundImage: "url('/projects.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-t from-black to-transparent opacity-80" />

      <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-6 group">
        {/* Icono dinámico */}
        <div className="absolute top-4 left-4 group-hover:scale-90 group-hover:shadow-xl transition-all duration-300">
          <div className="rounded-full bg-white p-1 shadow-md group-hover:bg-gray-900 group-hover:scale-125 transition-all duration-300">
            {Icon} {/* Aquí renderizamos el icono pasado como JSX */}
          </div>
        </div>

        {/* Contenido principal traducido */}
        <div className="flex flex-col items-start justify-end">
          <h3 className="text-4xl font-semibold mb-1">{t(titleKey)}</h3>
          <h3 className="text-xl font-semibold">{t(subtitleKey)}</h3>
        </div>
      </div>
    </a>
  );
}
