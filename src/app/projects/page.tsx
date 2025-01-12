'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import "../globals.css";

export default function Projects() {
  const TypesOfProjects = ["TODOS", "PERSONALES", "PRACTICAS", "EXPERIMENTOS", "RECOMENDADOS"];
  const [type, setType] = useState<string>("TODOS");

  const selectType = (currentType: string) => {
    setType(currentType);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="noise"></div>
      <header className="container my-5 mx-auto xl:px-20">
        <section>
          <div className="bg-[#af72ff56] flex items-center gap-5 py-10 px-5 md:px-10 text-white text-5xl rounded-xl">
            <Link href="/" className="text-base md:text-4xl">
              <FaArrowLeft />
            </Link>
            <h1 className="font-bold text-base md:text-4xl">PROYECTOS <span className="text-white/70">5</span></h1>
          </div>
        </section>
        <nav className="relative bg-[#af72ff56] flex items-center justify-center mt-5 rounded-xl py-2 pb-3 gap-8 font-bold text-sm md:text-base lg:text-lg overflow-y-hidden flex-wrap">
          {TypesOfProjects.map(t => (
            <h3 key={t} onClick={() => selectType(t)} className={`${type === t ? "text-white" : "text-white/70"} cursor-pointer pointer-events-auto`}>
              {t}
            </h3>
          ))}
        </nav>
      </header>
    </>
  )
}
