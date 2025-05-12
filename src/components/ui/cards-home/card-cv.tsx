"use client";

import { TbFileCv } from "react-icons/tb"; // Importamos el icono TbFileCv
import { motion } from "framer-motion"; // Importamos framer-motion
import { FiDownload } from "react-icons/fi";

interface CardLinkInterface {
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function CardCv({
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardLinkInterface) {

  const cvPath = '/cv-español.pdf';

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, filter: "blur(30px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`}
    >
      <a
        href={cvPath}
        download
        className={`group bg-gradient-to-b from-[#1e2124] to-[#2f3136] grid place-items-center outline-slate-50 relative rounded-2xl transition-all duration-300 w-full aspect-square overflow-hidden`}
      >
        <span className="absolute inset-0 bg-[#af2956] opacity-0 transition-all duration-500 rounded-full scale-0 group-hover:scale-150 group-hover:opacity-80 overflow-hidden" />
        <FiDownload className="absolute top-4 right-4 text-2xl text-white max-sm:text-xl max-sm:top-3 max-sm:right-2" />
        <TbFileCv className="w-28 h-auto drop-shadow-2xl text-white transition-transform duration-300 max-sm:w-14" />
      </a>
    </motion.div>
  );
}
