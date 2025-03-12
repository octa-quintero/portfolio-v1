"use client";

import { motion } from "framer-motion";

interface CardProjectProps {
  description: string;
  image: string;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
}

const CardProjects: React.FC<CardProjectProps> = ({
  description,
  image,
  colStart,
  rowStart,
  colSpan,
  rowSpan,
}) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg p-48 flex items-center justify-center text-white cursor-pointer"
      style={{
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: `${rowStart} / span ${rowSpan}`,
      }}
      whileHover="hover"
    >
      {/* Imagen y Título */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-center"
        initial={{ opacity: 1, filter: "blur(0px)" }}
        variants={{
          hover: { opacity: 0, filter: "blur(15px)", transition: { duration: 0.4, ease: "easeInOut" } },
        }}
      >
        <motion.img
          src={image}
          className="w-full h-full object-cover absolute inset-0 z-0"
          initial={{ scale: 1 }}
          variants={{
            hover: { 
              scale: 1.5,  // Agranda la imagen al 150%
              borderRadius: "30px", // Redondea los bordes
              transition: { duration: 0.4, ease: "easeInOut" }
            },
          }}
        />
        <motion.h3
          className="relative z-10 text-5xl font-bold"
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          variants={{
            hover: {
              opacity: 0,
              filter: "blur(10px)",
              scale: 3, // Agranda el texto un 20%
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        >
        </motion.h3>
      </motion.div>

      {/* Detalles que aparecen al hacer hover */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-4 opacity-0 text-center"
        variants={{
          hover: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
        }}
      >
        <p className="text-lg">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default CardProjects;
