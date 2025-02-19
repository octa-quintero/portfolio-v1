'use client';
import Grid from "@/components/ui/container/container";
import "../globals.css";
import CardInformation from "@/components/ui/cards-home/card-information";

export default function Projects() {

  return (
    <>
    <Grid columns={1} rows={1}>
            <CardInformation
        image="/logo.png"
        title="full_stack_developer" // Clave de traducción
        name="octavio_quintero" // Clave de traducción
        text="programador_texto" // Clave de traducción
        background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
        colStart={1}
        colSpan={3}
        rowStart={1}
        rowSpan={2}
      />
      </Grid>
    </>
  )
}
