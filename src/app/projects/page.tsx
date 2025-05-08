'use client';

import { useState } from "react";
import Grid from "@/components/ui/container/container";
import Navbar from "@/components/ui/components-projects/navbar";
import ProjectsFilter from "@/components/ui/components-projects/filter";
import CardProject from "@/components/ui/components-projects/projects";

const projects = [
  { 
    id: 2, 
    title: "Crewland", 
    description: "Crewland 🚀, una aplicación en la que tuve el rol de líder del equipo Backend. Durante semanas trabajamos para resolver los principales desafíos de asistir a festivales, desde encontrar compañía hasta gestionar el transporte y el alojamiento. Nuestra misión fue desarrollar una plataforma centralizada que conecte personas con intereses similares y simplifique toda la planificación.", 
    image: "/projects/crewland.jpg", 
    category: ["EXPERIENCIAS", "RECOMENDADOS"], 
    technologies: ["TypeScript", "NestJS", "Next.js", "Tailwind CSS", "PostgreSQL"],
    background: ["#3805A8", "#0F022B"],
  },
  { 
    id: 3, 
    title: "Event Map", 
    description: "EventMap🚗, una app para conductores de Uber, Cabify y similares. Permite visualizar zonas con alta demanda en un mapa interactivo, filtrar eventos próximos y optimizar recorridos con Google Maps. También facilita la creación de eventos y notificaciones para maximizar ganancias y reducir gastos. ¡Un cambio de juego para la planificación de viajes!", 
    image: "/projects/event-map.png", 
    category: ["EXPERIENCIAS"], 
    technologies: ["TypeScript", "PostgreSQL", "NestJS", "Next.js"],
    background: ["#13a87e", "#073d3d"],
  },
  { 
    id: 1, 
    title: "Pixel Gaming", 
    description: "PixelGaming🌻 es un sitio para los amantes de los videojuegos, donde puedes gestionar tu colección, compartir experiencias y descubrir nuevos títulos. Ofrece búsqueda por nombre, filtrado por categorías, y herramientas para gestionar tu perfil y juegos. Con un panel de administración para mantener un entorno seguro, restauración de contraseñas mediante token y una sección Top2024 con los juegos más populares, todo con una interfaz visualmente atractiva y responsive. Además, permite a los usuarios dejar reseñas y opiniones sobre cada juego.", 
    image: "/projects/pixel-gaming.png", 
    category: ["RECOMENDADOS", "PERSONALES"], 
    technologies: ["JavaScript", "Node.js", "React", "PostgreSQL"],
    background: ["#a8a807", "#242402"],
  },
  { 
    id: 4, 
    title: "Talent Place", 
    description: "TalentPlace🚀 fue creada para conectar empresas, startups y desarrolladores IT juniors en una plataforma intuitiva y eficiente. Su objetivo es simplificar el proceso de búsqueda de talento, brindando a las empresas acceso rápido a profesionales en crecimiento y facilitando a los juniors oportunidades para ingresar al mundo laboral.", 
    image: "/projects/talent-place.jpg", 
    category: ["EXPERIENCIAS", "RECOMENDADOS"], 
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    background: ["#0cafc4", "#0a2124"],
  },
  { 
    id: 5, 
    title: "Portfolio", 
    description: "Este es mi portafolio personal, diseñado para mostrar mis proyectos y habilidades. Además, cuenta con integración a APIs como la de Discord y Spotify, para obtener información en tiempo real sobre mi estado y actividad. A través de estas conexiones, el portafolio ofrece una visión más dinámica y actualizada de mis intereses y trabajo.", 
    image: "/projects/portfolio.png", 
    category: ["PERSONALES"], 
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    background: ["#b90bd4", "#370140"],
  },
];

export default function Projects() {
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
            title="PROJECTS"
            background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
            colStart={1}
            colSpan={1}
            rowStart={1}
            rowSpan={1}
            projects={filteredProjects} // Pasamos los proyectos filtrados
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
            />
          ))}
        </Grid>
      </div>

      {/* Versión móvil */}
      <div className="sm:hidden">
        <Grid columns={1} rows={1}>
          <Navbar
            image="/pixel.gif"
            title="PROJECTS"
            background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
            colStart={1}
            colSpan={1}
            rowStart={1}
            rowSpan={1}
            projects={filteredProjects} // Pasamos los proyectos filtrados
          />
        </Grid>

        <ProjectsFilter onFilterChange={setFilter} />

        {/* Ajustamos el Grid para mostrar los proyectos en una sola columna en dispositivos móviles */}
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
            />
          ))}
        </Grid>
      </div>
    </>
  );
}