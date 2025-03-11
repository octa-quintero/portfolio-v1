'use client';
import { useState } from "react";
import Grid from "@/components/ui/container/container";
import Navbar from "@/components/ui/components-projects/navbar";
import ProjectsFilter from "@/components/ui/components-projects/filter";
import CardProject from "@/components/ui/components-projects/projects";

const projects = [
  { id: 1, title: "Proyecto 1", description: "Descripción 1", image: "/project1.jpg", category: "PERSONALES" },
  { id: 2, title: "Proyecto 2", description: "Descripción 2", image: "/project2.jpg", category: "PASANTIAS" },
  { id: 3, title: "Proyecto 3", description: "Descripción 3", image: "/project3.jpg", category: "RECOMENDADOS" },
  { id: 4, title: "Proyecto 4", description: "Descripción 4", image: "/project4.jpg", category: "PERSONALES" },
  { id: 5, title: "Proyecto 5", description: "Descripción 5", image: "/project5.jpg", category: "PASANTIAS" },
  { id: 6, title: "Proyecto 6", description: "Descripción 6", image: "/project6.jpg", category: "RECOMENDADOS" },
  { id: 7, title: "Proyecto 7", description: "Descripción 7", image: "/project7.jpg", category: "PERSONALES" },
  { id: 8, title: "Proyecto 8", description: "Descripción 8", image: "/project8.jpg", category: "PASANTIAS" },
  { id: 9, title: "Proyecto 9", description: "Descripción 9", image: "/project9.jpg", category: "RECOMENDADOS" },
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
            title={project.title}
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
