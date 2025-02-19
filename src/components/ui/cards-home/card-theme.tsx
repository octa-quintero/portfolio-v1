'use client'

import { CardTextInterface } from "./card-text";
import { useStore } from "@/zustand/store";

export default function ThemeCard({
  background,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardTextInterface) {
  const { darkMode, toggleTheme } = useStore();
  
  return (
    <div
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`}
    >
      <label
        className="scale-150 relative inline-block h-8 w-16 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#0a0a0acc]"
      >
        <input 
          className="peer sr-only"
          id="AcceptConditions"
          type="checkbox"
          checked={darkMode}
          onChange={()=>toggleTheme()}
        />
        <span
          className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-10 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
        ></span>
      </label>
    </div>
  )
}
