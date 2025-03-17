"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TechIcons = [
  { src: '/typescript.svg', alt: 'TypeScript' },
  { src: '/javascript.svg', alt: 'JavaScript' },
  { src: '/nestjs.svg', alt: 'NestJS' },
  { src: '/node.svg', alt: 'Node.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/reactjs.svg', alt: 'React' },
  { src: '/postgresql.svg', alt: 'PostgreSQL' },
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/github.svg', alt: 'Git' },
  { src: '/git.svg', alt: 'Git' },
  { src: '/css.svg', alt: 'CSS' },
  { src: '/html.svg', alt: 'HTML' },
];

interface CardProjectProps {
  description: string;
  image: string;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
  title: string;
  technologies: string[];
  background: string[]; // Colores de fondo personalizados
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
  background, // Nuevos colores para el fondo
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const techIcons = TechIcons.filter(icon => technologies.includes(icon.alt));

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg p-48 flex items-center justify-center text-white cursor-pointer"
      style={{
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: `${rowStart} / span ${rowSpan}`,
      }}
      whileHover="hover"
      onClick={toggleModal} // Abre el modal al hacer clic
    >
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
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
      <motion.div
        className="absolute inset-0 flex flex-col justify-between items-start  pt-8 pb-8 pl-5 pr-5 opacity-0 text-left"
        style={{
          background: `linear-gradient(to bottom right, ${background[0]}, ${background[1]})`, // Fondo personalizado en el modal
        }}
        variants={{
          hover: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },  
        }}
      >
        <div className="flex flex-col justify-between gap-3">
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="text-xl font-medium overflow-hidden max-h-58 text-ellipsis whitespace-normal line-clamp-6">
            {description}
          </p>
        </div>

        {/* Sección de tecnologías abajo a la izquierda */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techIcons.map((tech, index) => (
            <motion.img 
              key={index} 
              src={tech.src} 
              alt={tech.alt} 
              className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity duration-200"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
{/* Modal */}
{/* Modal */}
{isModalOpen && (
  <div
  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
  onClick={toggleModal} // Cierra el modal al hacer clic fuera
>
  <div
    className="rounded-lg p-8 max-w-3xl w-full bg-gradient-to-br from-zinc-700 from-zinc-1000 to-black"
    style={{
      border: "15px solid transparent", // Borde transparente
      borderImage: `linear-gradient(to bottom right, ${background[0]}, ${background[1]}) 2`, // Gradiente en el borde
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Sombra
      position: 'relative',
      borderRadius: '30px'
    }}
    onClick={(e) => e.stopPropagation()} // Previene el cierre al hacer clic dentro del modal
  >
    {/* Contenedor con el título y la X */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-medium text-left ">{title}</h2>
      <button
        className="text-3xl font-bold text-white"
        onClick={toggleModal} // Cierra el modal al hacer clic en la X
      >
        X
      </button>
    </div>

    {/* Descripción alineada a la izquierda */}
    <p className="text-xl text-left mb-4">{description}</p>

    {/* Sección de tecnologías */}
    <div className="flex flex-wrap justify-center gap-4">
      {techIcons.map((tech, index) => (
        <img key={index} src={tech.src} alt={tech.alt} className="w-16 h-16" />
      ))}
    </div>
  </div>
</div>

)}



    </motion.div>
  );
};

export default CardProjects;
