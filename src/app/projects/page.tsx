'use client';
import { useState } from "react";
import Grid from "@/components/ui/container/container";
import Navbar from "@/components/ui/components-projects/navbar";
import ProjectsFilter from "@/components/ui/components-projects/filter";
import CardProject from "@/components/ui/components-projects/projects";

const projects = [
  { 
    id: 1, 
    title: "Pixel Gaming", 
    description: "Un sitio para compartir experiencias de juegos.", 
    image: "/projects/pixel-gaming.png", 
    category: ["RECOMENDADOS", "PERSONALES"], 
    technologies: ["React", "Next.js", "Tailwind CSS"] 
  },
  { 
    id: 2, 
    title: "Crewland", 
    description: "Plataforma de gestión de equipos de desarrollo.", 
    image: "/projects/crewland.png", 
    category: ["PASANTIAS", "RECOMENDADOS"], 
    technologies: ["Vue.js", "Firebase", "Node.js"] 
  },
  { 
    id: 3, 
    title: "Event Map", 
    description: "Aplicación para organizar y descubrir eventos.", 
    image: "/projects/event-map.png", 
    category: ["PASANTIAS"], 
    technologies: ["NestJS", "PostgreSQL", "Prisma"] 
  },
  { 
    id: 4, 
    title: "Talent Place", 
    description: "Plataforma de contratación para freelancers.", 
    image: "/projects/talent-place.png", 
    category: ["PASANTIAS"], 
    technologies: ["Next.js", "MongoDB", "TypeScript"] 
  },
  { 
    id: 5, 
    title: "Portfolio", 
    description: "Mi portafolio personal para mostrar proyectos y habilidades.", 
    image: "/projects/portfolio.png", 
    category: ["PERSONALES"], 
    technologies: ["Next.js", "Tailwind CSS", "Zustand"] 
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("TODOS");

  const filteredProjects = filter === "TODOS"
    ? projects
    : projects.filter((project) => project.category.includes(filter));

  return (
    <>
      <Grid columns={1} rows={1}>
        <Navbar
          image="/pixel.gif"
          title="PROJECTS"
          background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
          colStart={1}
          colSpan={1}
          rowStart={1}
          rowSpan={1}
        />
      </Grid>

      {/* Filtro de proyectos */}
      <ProjectsFilter onFilterChange={setFilter} />

      {/* Renderizado de proyectos en una grilla de 3x3 */}
      <Grid columns={3} rows={3}>
        {filteredProjects.map((project, index) => (
          <CardProject
            key={project.id}
            title={project.title}  // Ahora pasamos el título
            description={project.description}
            image={project.image}
            technologies={project.technologies}  // Pasamos la lista de tecnologías
            colStart={(index % 3) + 1}
            colSpan={1}
            rowStart={Math.floor(index / 3) + 1}
            rowSpan={1}
          />
        ))}
      </Grid>
    </>
  );
}
