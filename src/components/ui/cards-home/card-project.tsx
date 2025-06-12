'use client';

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Importamos framer-motion para la animación

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
  colStart,
  colSpan,
  rowStart,
  rowSpan,
  titleKey,
  subtitleKey,
}: CardProjectProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, filter: "blur(30px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-white flex place-items-center relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} w-full max-w-full`} // max-w-full para evitar que se expanda
      style={{
        backgroundImage: "url('/projects.webp')",
        backgroundSize: "cover", // Asegura que la imagen cubra el contenedor
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat",
        height: "auto",
      }}
    >
      <Link
        href={link} // Ahora se pasa el valor de `link` a `href`
        passHref
        rel="noopener noreferrer"
        className="absolute inset-0 w-full h-full" // Asegura que el Link cubra todo el área
      >
        <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-t from-black to-transparent opacity-80" />

        <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-6 max-sm:p-3 group">
          {/* Icono dinámico */}
          <div className="absolute top-4 left-4 max-sm:top-2 max-sm:left-44 group-hover:scale-90 group-hover:shadow-xl transition-all duration-300">
            <div className="rounded-full bg-white p-1 shadow-md group-hover:bg-gray-900 group-hover:scale-125 transition-all duration-300">
              {React.cloneElement(Icon, {
                className: 'max-sm:w-6 max-sm:h-6 text-black group-hover:text-white transition-colors duration-300',
              })}
            </div>
          </div>

          {/* Contenido principal traducido */}
          <div className="flex flex-col items-start justify-end">
            <h3 className="text-5xl max-sm:text-xl font-semibold mb-1 max-sm:mb-0">{t(titleKey)}</h3>
            <h3 className="text-3xl max-sm:text-sm font-semibold">{t(subtitleKey)}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
