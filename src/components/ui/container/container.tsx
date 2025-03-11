import React from "react";

interface GridProps {
  columns: number; // Número de columnas
  rows: number; // Número de filas
  children: React.ReactNode; // Elementos dentro de la grilla
}

  const Grid: React.FC<GridProps> = ({ columns, rows, children }) => {
    return (
      <section
        className="grid gap-5 container mx-auto"
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
