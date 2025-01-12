'use client'

import { useStore } from '@/zustand/store';
import React from 'react'

export default function BodyClient({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkMode } = useStore();

  return (
    <body
      className={`${darkMode ? "" : "bg-[#171717]"} m-[50px] transition-all duration-500 ease-in-out`}
    >
      {children}
    </body>
  );
}
