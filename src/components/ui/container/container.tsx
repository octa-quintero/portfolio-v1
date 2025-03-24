'use client';

import React, { useState, useEffect } from "react";

interface GridProps {
  columns: number; // Número de columnas
  rows: number; // Número de filas
  children: React.ReactNode; // Elementos dentro de la grilla
}

const Grid: React.FC<GridProps> = ({ columns, rows, children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Considera 768px como el límite entre móvil y escritorio
    };

    handleResize(); // Llama al tamaño inicial al cargar el componente
    window.addEventListener("resize", handleResize); // Agrega el evento de cambio de tamaño

    return () => window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
  }, []);

  return (
    <section className="container mx-auto">
      {/* Grilla Principal (Para pantallas grandes) */}
      {!isMobile && (
        <div
          className={`grid gap-5 grid-cols-${columns} grid-rows-${rows}`}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {children}
        </div>
      )}

      {/* Grilla Secundaria (Para pantallas pequeñas) */}
      {isMobile && (
        <div
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)", // Para pantallas pequeñas
            gridTemplateRows: "repeat(6, 1fr)", // Ajuste de filas
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Grid;
