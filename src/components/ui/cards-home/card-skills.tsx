'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface CardSkillsInterface {
  background: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

const icons = [
  { src: '/typescript.svg', alt: 'TypeScript'},
  { src: '/javascript.svg', alt: 'JavaScript'},
  { src: '/nestjs.svg', alt: 'NestJS'},
  { src: '/node.svg', alt: 'Node.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS'},
  { src: '/reactjs.svg', alt: 'React' },
  { src: '/postgresql.svg', alt: 'PostgreSQL'},
  { src: '/nextjs.svg', alt: 'Next.js'},
  { src: '/github.svg', alt: 'Git' },
  { src: '/git.svg', alt: 'Git'},
  { src: '/css.svg', alt: 'CSS'},
  { src: '/html.svg', alt: 'HTML'},
];

export default function CardSkills({
  background,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardSkillsInterface) {
return (
  <motion.div
    className={`${background} grid grid-cols-4 grid-rows-3 gap-2 outline-slate-50 relative rounded-2xl transition z-[1] col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} p-4 aspect-square max-sm:p-2.5 max-sm:gap-1`}
                    initial={{ opacity: 0, x: 80, filter: "blur(30px)" }}
        animate={{ opacity: 1, x:0 , filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {icons.map((icon, index) => (
      <div key={index} className="flex items-center justify-center">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={60}
          height={60}
          className="max-sm:w-20 max-sm:h-20 !w-auto !h-auto"
        />
      </div>
    ))}
  </motion.div>
);

}