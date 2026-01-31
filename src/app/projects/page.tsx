'use client';

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@/components/ui/container/container";
import Navbar from "@/components/ui/components-projects/navbar";
import ProjectsFilter from "@/components/ui/components-projects/filter";
import CardProject from "@/components/ui/components-projects/projects";

const projects = [
  { 
    id: 2, 
    title: "Crewland", 
    description: "crewland_description", 
    image: "/projects/crewland.jpg", 
    category: ["EXPERIENCIAS", "RECOMENDADOS"], 
    technologies: ["TypeScript", "NestJS", "Next.js", "Tailwind CSS", "PostgreSQL"],
    background: ["#3805A8", "#0F022B"],
    github: "https://github.com/IgrowkerTraining/i004-crewland-back"
  },
  { 
    id: 3, 
    title: "Event Map", 
    description: "eventmap_description", 
    image: "/projects/event-map.png", 
    category: ["EXPERIENCIAS"], 
    technologies: ["TypeScript", "PostgreSQL", "NestJS", "Next.js"],
    background: ["#13a87e", "#073d3d"],
    github: "https://github.com/IgrowkerTraining/i003-eventmap-front"
  },
  { 
    id: 1, 
    title: "Pixel Gaming", 
    description: "pixelgaming_description", 
    image: "/projects/pixel-gaming.png", 
    category: ["RECOMENDADOS", "PERSONALES"], 
    technologies: ["JavaScript", "Node.js", "React", "PostgreSQL"],
    background: ["#a8a807", "#242402"],
    github: "https://github.com/octa-quintero/PixelGaming"
  },
  { 
    id: 4, 
    title: "Talent Place", 
    description: "talentplace_description", 
    image: "/projects/talent-place.jpg", 
    category: ["EXPERIENCIAS", "RECOMENDADOS"], 
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    background: ["#0cafc4", "#0a2124"],
    github: "https://github.com/IgrowkerTraining/i002-talentplace-back"
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
},
  { 
    id: 6, 
    title: "Portfolio", 
    description: "portfolio_description", 
    image: "/projects/portfolio.png", 
    category: ["PERSONALES"], 
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    background: ["#b90bd4", "#370140"],
    github: "https://github.com/octa-quintero/portfolio-v1"
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("TODOS");

  const filteredProjects = filter === "TODOS"
    ? projects
    : projects.filter((project) => project.category.includes(filter));

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
            projects={filteredProjects}
          />
        </Grid>

        <ProjectsFilter onFilterChange={setFilter} />

        <Grid columns={3} rows={1}>
          {filteredProjects.map((project, index) => (
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
            projects={filteredProjects}
          />
        </Grid>

        <ProjectsFilter onFilterChange={setFilter} />

        <Grid columns={1} rows={filteredProjects.length}>
          {filteredProjects.map((project, index) => (
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