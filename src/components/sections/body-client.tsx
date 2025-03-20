'use client'

import { useStore } from '@/zustand/store';
import React from 'react'

export default function BodyClient({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkMode } = useStore();

  return (
    <body
      className={`${darkMode ? "" : "bg-[#171717]"} min-h-full w-full transition-all duration-1000 ease-in-out pt-10 px-4 sm:px-10 md:px-20 lg:px-40 pb-10`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
      }}
    >
      {children}
    </body>
  );
}
