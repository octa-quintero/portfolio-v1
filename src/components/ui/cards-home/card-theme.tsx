'use client'

import { CardTextInterface } from "./card-text";
import { useStore } from "@/zustand/store";

export default function ThemeCard({
  background,
  colStart,
  colSpan,
  rowStart,
  rowSpan,
}: CardTextInterface) {
  const { darkMode, toggleTheme } = useStore();
  
  return (
    <div
      className={`${background} grid place-items-center outline-slate-50 relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} aspect-square`}
    >
      <label
        className="relative inline-block h-8 w-16 max-sm:h-9 max-sm:w-16 scale-150 max-sm:scale-100 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#0a0a0acc]"
      >
        <input 
          className="peer sr-only"
          id="AcceptConditions"
          type="checkbox"
          checked={darkMode}
          onChange={() => toggleTheme()}
        />
        <span
          className="absolute inset-y-0 start-0 m-1 size-6 max-sm:size-7 max-sm:w-7 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-10 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
        ></span>
      </label>
    </div>
  );  
}
