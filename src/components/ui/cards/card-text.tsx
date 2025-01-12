export interface CardTextInterface {
  background: string;
  title?: string;
  mainText?: string;
  subtitle?: string;
  colStart?: number; // Permite personalizar el inicio de la columna
  colSpan?: number; // Permite personalizar el número de columnas
  rowStart?: number; // Permite personalizar el inicio de la fila
  rowSpan?: number; // Permite personalizar el número de filas
}

export default function CardText({
  background,
  title,
  mainText,
  subtitle,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardTextInterface) {
  return (
    <div
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-[-1] col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} py-16`}
    >
<div className="flex flex-col items-center justify-center">
  <p className="text-center text-2xl text-white light">{title}</p> {/* Corregido */}
  <p className="text-center text-8xl text-white font-bold">{mainText}</p>
  <p className="text-center text-2xl text-white light">{subtitle}</p>
</div>

    </div>
  );
}
