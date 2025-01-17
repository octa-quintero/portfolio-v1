/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";

interface CardLinkInterface {
  link: string;
  icon: IconType;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function CardEmail({
  link,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardLinkInterface) {
  return (
    <Link
      href={`mailto:${link}`}
      target="_blank"
      className={`group bg-gradient-to-t from-[#1e2124] to-[#2f3136] grid place-items-center outline-slate-50 relative rounded-2xl transition-all duration-300 w-full z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} overflow-hidden`}
    >
      {/* Fondo con transición en hover */}
      <span className="absolute inset-0 bg-[#f1f3f4] opacity-0 transition-all duration-500 rounded-full scale-0 group-hover:scale-150 group-hover:opacity-80" />

      {/* Icono blanco de Gmail */}
      <div className="absolute w-36 h-36 flex items-center justify-center">
        <img
          src="/gmailwhite.svg"
          alt="Gmail Icon"
          className="w-full h-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>

      {/* Icono de Gmail con colores originales al hacer hover */}
      <div className="absolute w-36 h-36 flex items-center justify-center">
        <img
          src="/gmail.svg"
          alt="Gmail Icon Color"
          className="w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Icono de external link (no desaparece) */}
      <FiExternalLink className="absolute top-4 right-4 text-2xl text-white" />
    </Link>
  );
}
