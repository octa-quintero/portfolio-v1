'use client';
import Grid from "@/components/ui/container/container";
import "../globals.css";
import NavBar from "@/components/ui/components-projects/navbar";

export default function Projects() {

  return (
    <>
    <Grid columns={1} rows={3}>
            <NavBar
        title="full_stack_developer" // Clave de traducción
        image="/logo.png"
        colStart={1}
        colSpan={3}
        rowStart={1}
        rowSpan={2}
      />
      </Grid>
    </>
  )
}
