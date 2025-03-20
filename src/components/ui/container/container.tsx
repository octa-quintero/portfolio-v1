import React from "react";

interface GridProps {
  columns: number; // Número de columnas
  rows: number; // Número de filas
  children: React.ReactNode; // Elementos dentro de la grilla
}

const Grid: React.FC<GridProps> = ({ columns, rows, children }) => {
  return (
    <section
      className={`grid gap-5 container mx-auto max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-3 max-sm:w-full max-sm:h-full`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </section>
  );
};

export default Grid;
