"use client";

import { motion } from "framer-motion";

interface CardProjectProps {
  description: string;
  image: string;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
  title: string;
  technologies: string[];
}

const CardProjects: React.FC<CardProjectProps> = ({
  description,
  image,
  title,
  technologies,
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
      {/* Imagen y título */}
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
              scale: 1.5,  
              borderRadius: "30px",
              transition: { duration: 0.4, ease: "easeInOut" }
            },
          }}
        />
        <motion.h3
          className="relative z-10 text-2xl font-bold"
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          variants={{
            hover: {
              opacity: 0,
              filter: "blur(10px)",
              scale: 3,
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
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-sm bg-gray-700 px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardProjects;
