import { FaCode } from "react-icons/fa";

interface CardProjectProps {
  link: string;
  icon: typeof FaCode;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

export default function CardProject({
  link,
  icon: Icon,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white grid place-items-center relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`}
      style={{
        backgroundImage: "url('/projects.webp')", // Asegúrate de poner el nombre correcto del archivo GIF
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-t from-black to-transparent opacity-80" />

      <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-6 group">
        {/* Icono de GitHub (o el icono que quieras) */}
        <div className="absolute top-4 left-4 group-hover:scale-90 group-hover:shadow-xl transition-all duration-300">
          <div className="rounded-full bg-white p-1 shadow-md group-hover:bg-gray-900 group-hover:scale-125 transition-all duration-300">
            <Icon size={45} className="text-gray-900 group-hover:text-white transition-all duration-300" />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col items-start justify-end">
          <h3 className="text-4xl font-semibold mb-1">PROJECT</h3>
          <h3 className="text-xl font-semibold">Descubre mis proyectos más recientes</h3>
        </div>
      </div>
    </a>
  );
}
