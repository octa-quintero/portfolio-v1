'use client';

import React, { useState, useEffect } from "react";

interface GridProps {
  columns: number; // Número de columnas
  rows: number; // Número de filas
  children: React.ReactNode; // Elementos dentro de la grilla
}

const Grid: React.FC<GridProps> = ({ columns, rows, children }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Inicializa como `null`

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800); // Considera 800px como el límite entre móvil y escritorio
    };

    handleResize(); // Llama al tamaño inicial al cargar el componente

    window.addEventListener("resize", handleResize); // Añadir el evento de resize

    return () => window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
  }, []);

  // Renderiza solo cuando `isMobile` está definido (es decir, después del primer renderizado en cliente)
  if (isMobile === null) return null;

  return (
    <section className="w-full">
      {/* Grilla Principal (Para pantallas grandes) */}
      {!isMobile && (
        <div
          className={`grid gap-5 grid-cols-${columns} grid-rows-${rows}`}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {children}
        </div>
      )}

      {/* Grilla Responsiva (Para pantallas pequeñas) */}
      {isMobile && (
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, // Asegura que las celdas se ajusten al tamaño disponible
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`, // Lo mismo para las filas
          }}
        >
          {React.Children.map(children, (child) => (
            <div
              style={{
                aspectRatio: "1", // Las celdas serán cuadradas en dispositivos móviles
                width: "100%", // Asegura que ocupe todo el espacio disponible en su celda
                height: "100%", // Asegura que el elemento ocupe todo el alto de la celda
              }}
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Grid;
