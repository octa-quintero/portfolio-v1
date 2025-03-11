'use client'

import { useStore } from '@/zustand/store';
import React from 'react'

export default function BodyClient({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkMode } = useStore();

  return (
<body
className={`${darkMode ? "" : "bg-[#171717]"} min-h-screen w-full transition-all duration-1000 ease-in-out pt-10 px-40 pb-10`}

>
  {children}
</body>

  );
}
