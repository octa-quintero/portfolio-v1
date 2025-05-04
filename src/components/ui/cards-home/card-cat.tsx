import Image from 'next/image';

export interface CardSkillsInterface {
  background: string;
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}

const icons = [
  { src: '/cat.gif', alt: 'Cat'},

];

export default function CardCat({
  background,
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
}: CardSkillsInterface) {
return (
<div
  className={`${background} flex justify-center gap-2 outline-slate-50 relative rounded-2xl transition z-[1] col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} p-4 aspect-square max-sm:p-2.5 max-sm:gap-1`}
>
  {/* Capa de borde animado */}
  <div className="border-gradient-animation absolute inset-0 rounded-xl z-0"></div>

  {/* Nueva capa de sombra animada */}
  <div className="border-shadow-animation absolute inset-0 rounded-xl z-0"></div>

  {/* Contenido principal (íconos) */}
  <div className="relative z-[1] flex flex-wrap items-center justify-center gap-2">
    {icons.map((icon, index) => (
      <div key={index} className="flex items-center justify-center">
        <Image src={icon.src} alt={icon.alt} width={150} height={150} />
      </div>
    ))}
  </div>
</div>

);

}