'use client';
import { useState } from "react";
import Grid from "@/components/ui/container/container";
import Navbar from "@/components/ui/components-projects/navbar";
import ProjectsFilter from "@/components/ui/components-projects/filter";
import CardProject from "@/components/ui/components-projects/projects";

const projects = [
  { id: 2, description: "Descripción 1", image: "/projects/portfolio.png", category: "PERSONALES" },
  { id: 4, description: "Descripción 2", image: "/projects/talent-place.png", category: "PASANTIAS" },
  { id: 3, description: "Descripción 3", image: "/projects/pixel-gaming.png", category: "RECOMENDADOS" },
  { id: 5, description: "Descripción 4", image: "/projects/event-map.png", category: "PERSONALES" },
  { id: 1, description: "Descripción 5", image: "/projects/crewland.png", category: "PASANTIAS" },
];



export default function Projects() {
  const [filter, setFilter] = useState<string>("TODOS");

  const filteredProjects = filter === "TODOS"
    ? projects
    : projects.filter((project) => project.category === filter);

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
            description={project.description}
            image={project.image}
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
