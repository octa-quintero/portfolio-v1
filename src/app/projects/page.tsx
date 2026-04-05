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
    description: "pixelgaming_description", 
    image: "/projects/pixel-gaming.png", 
    category: ["RECOMENDADOS", "PERSONALES"], 
    technologies: ["JavaScript", "Node.js", "React", "PostgreSQL"],
    background: ["#a8a807", "#242402"],
    github: "https://github.com/octa-quintero/PixelGaming",
    createdAt: new Date("2023-06-15")
  },
  { 
    id: 2, 
    title: "Crewland", 
    description: "crewland_description", 
    image: "/projects/crewland.jpg", 
    category: ["EXPERIENCIAS", "RECOMENDADOS"], 
    technologies: ["TypeScript", "NestJS", "Next.js", "Tailwind CSS", "PostgreSQL"],
    background: ["#3805A8", "#0F022B"],
    github: "https://github.com/IgrowkerTraining/i004-crewland-back",
    createdAt: new Date("2023-09-20")
  },
  { 
    id: 3, 
    title: "Event Map", 
    description: "eventmap_description", 
    image: "/projects/event-map.png", 
    category: ["EXPERIENCIAS"], 
    technologies: ["TypeScript", "PostgreSQL", "NestJS", "Next.js"],
    background: ["#13a87e", "#073d3d"],
    github: "https://github.com/IgrowkerTraining/i003-eventmap-front",
    createdAt: new Date("2024-02-10")
  },
  { 
    id: 4, 
    title: "Talent Place", 
    description: "talentplace_description", 
    image: "/projects/talent-place.jpg", 
    category: ["EXPERIENCIAS", "RECOMENDADOS"], 
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    background: ["#0cafc4", "#CC00FF"],
    github: "https://github.com/IgrowkerTraining/i002-talentplace-back",
    createdAt: new Date("2024-01-05")
  },
  { 
    id: 5, 
    title: "Habit-GO", 
    description: "habit-go_description", 
    image: "/projects/habit-go.png", 
    category: ["PERSONALES"], 
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "NestJS", "PostgreSQL"],
    background: ["#ACE01D", "#4E6B3D"],
    github: "https://github.com/octa-quintero/habit-go-backend",
    createdAt: new Date("2024-11-12")
  },
  { 
    id: 6, 
    title: "Portfolio", 
    description: "portfolio_description", 
    image: "/projects/portfolio.png", 
    category: ["PERSONALES"], 
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    background: ["#b90bd4", "#370140"],
    github: "https://github.com/octa-quintero/portfolio-v1",
    createdAt: new Date("2024-03-18")
  },
  { 
    id: 7, 
    title: "Biotasys", 
    description: "biotasys_description", 
    image: "/projects/biotasys.png", 
    category: ["EXPERIENCIAS"], 
    technologies: ["TypeScript", "Phyton", "NestJS", "Tailwind CSS", "React"],
    background: ["#006C75", "#00EBFF"],
    github: "https://github.com/IgrowkerTraining/i006-biotasys-fullstack",
    createdAt: new Date("2026-03-01")
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("TODOS");

  const filteredProjects = filter === "TODOS"
    ? projects
    : projects.filter((project) => project.category.includes(filter));

  // Ordenar por fecha de creación (más recientes primero)
  const sortedProjects = [...filteredProjects].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return (
    <>
      {/* Versión de escritorio */}
      <div className="hidden sm:block">
        <Grid columns={1} rows={1}>
          <Navbar
            image="/pixel.gif"
            title="projects"
            background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
            colStart={1}
            colSpan={1}
            rowStart={1}
            rowSpan={1}
            projects={sortedProjects}
          />
        </Grid>

        <ProjectsFilter onFilterChange={setFilter} />

        <Grid columns={3} rows={1}>
          {sortedProjects.map((project, index) => (
            <CardProject
              key={`${project.id}-${filter}`}
              title={project.title}
              background={project.background}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              colStart={(index % 3) + 1}
              colSpan={1}
              rowStart={Math.floor(index / 3) + 1}
              rowSpan={1}
              github={project.github}
            />
          ))}
        </Grid>
      </div>

      {/* Versión móvil */}
      <div className="sm:hidden">
        <Grid columns={1} rows={1}>
          <Navbar
            image="/pixel.gif"
            title="projects"
            background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
            colStart={1}
            colSpan={1}
            rowStart={1}
            rowSpan={1}
            projects={sortedProjects}
          />
        </Grid>

        <ProjectsFilter onFilterChange={setFilter} />

        <Grid columns={1} rows={sortedProjects.length}>
          {sortedProjects.map((project, index) => (
            <CardProject
              key={`${project.id}-${filter}`}
              title={project.title}
              background={project.background}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              colStart={1}
              colSpan={1}
              rowStart={index + 1}
              rowSpan={1}
              github={project.github}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}