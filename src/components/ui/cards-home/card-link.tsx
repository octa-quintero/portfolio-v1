import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";

interface CardLinkInterface {
  background: string;
  link: string;
  icon: IconType;
  colStart?: number; // Permite personalizar el inicio de la columna
  colSpan?: number; // Permite personalizar el número de columnas
  rowStart?: number; // Permite personalizar el inicio de la fila
  rowSpan?: number; // Permite personalizar el número de filas
}

export default function CardLink({
  background,
  link,
  icon: Icon,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardLinkInterface) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`${background} grid place-items-center relative rounded-2xl transition w-full hover:scale-[1.02]col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} hover:scale-[1.02] z-auto cursor-pointer pointer-events-auto`}
    >
      <FiExternalLink className="absolute top-4 right-4 text-2xl shadow-md text-white" />
      <Icon className="w-24 h-24 drop-shadow-2xl text-white" />
    </Link>
  );
}
