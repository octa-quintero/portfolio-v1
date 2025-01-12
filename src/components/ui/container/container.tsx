import React from "react";

interface GridProps {
  columns: number; // Número de columnas
  rows: number; // Número de filas
  children: React.ReactNode; // Elementos dentro de la grilla
}

const Grid: React.FC<GridProps> = ({ columns, rows, children }) => {
  return (
    <section
      className="grid gap-5 my-5 container mx-auto xl:px-20"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: "100%",
        height: "auto",
      }}
    >
        {children}
    </section>
  );
};

export default Grid;
