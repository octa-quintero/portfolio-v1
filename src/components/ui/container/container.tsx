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
      setIsMobile(window.innerWidth < 800); // Considera 768px como el límite entre móvil y escritorio
    };

    handleResize(); // Llama al tamaño inicial al cargar el componente
    window.addEventListener("resize", handleResize); // Agrega el evento de cambio de tamaño

    return () => window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
  }, []);

  // Renderiza solo cuando `isMobile` está definido (es decir, después del primer renderizado en cliente)
  if (isMobile === null) return null;

  return (
    <section className="w-full mx-auto">
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

      {isMobile && (
        <div
  className="grid grid-cols-3 grid-rows-8 gap-4 auto-rows-[minmax(80px,_1fr)]"
  style={{
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    height: '100vh', // Asegura que el contenedor de la grilla ocupe el 100% del alto de la pantalla
    overflow: 'hidden', // Evita que el contenido se desborde fuera de los márgenes
    padding: '0 16px', // Para agregar un margen en los laterales, si es necesario
  }}
>
  {children}
</div>

      )}
    </section>
  );
};

export default Grid;
