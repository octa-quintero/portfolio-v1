import "./globals.css";
import { FaLinkedinIn, FaGithub, FaCode, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Grid from "@/components/ui/container/container";
import CardLinkedin from "@/components/ui/cards/card-linkedin";
import CardText from "@/components/ui/cards/card-text";
import CardInformation from "@/components/ui/cards/card-information";
import ThemeCard from "@/components/ui/cards/card-theme";
import CardDiscord from "@/components/ui/cards/card-discord";
import SpotifyCard from "@/components/ui/cards/card-spotify";
import CardTime from "@/components/ui/cards/card-time";
import CardGitHub from "@/components/ui/cards/card-github";
import CardProject from "@/components/ui/cards/card-project";
import CardSkills from "@/components/ui/cards/card-skills";
import CardEmail from "@/components/ui/cards/card-email";
import CardWhatsApp from "@/components/ui/cards/whatsapp";
import LanguageSwitch from "@/components/ui/cards/card-languaje";


export default function App() {
  return (
    <>
      <Grid columns={4} rows={6}>
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

        <LanguageSwitch
          background="bg-gradient-to-b from-[#1e2124] to-[#2f3136]"
          colStart={4} // Comienza en la columna 1
          colSpan={1}
          rowStart={1}
          rowSpan={1}
        />
        <ThemeCard
          background="bg-gradient-to-t from-[#1e2124] to-[#2f3136]"
          colStart={4}
          colSpan={1}
          rowStart={2}
          rowSpan={1} titleKey={""} subtitleKey={""}        />
<CardText
  background="bg-gradient-to-b from-[#1e2124] to-[#2f3136]"
  titleKey="age" // Usamos la clave de traducción
  mainText="22"
  subtitleKey="years_old" // Usamos la clave de traducción
  colStart={1} // Comienza en la columna 1
  colSpan={1}
  rowStart={3}
  rowSpan={1}
/>

          <CardLinkedin
            link="https://www.linkedin.com/"
            icon={FaLinkedinIn}
            colStart={2} // Comienza en la columna 1
            colSpan={1}
            rowStart={3}
            rowSpan={1}
          />
        <CardProject
  link="https://github.com/octa-quintero"
  icon={FaCode}
  colStart={3}
  colSpan={2}
  rowStart={3}
  rowSpan={1}
/>
<CardGitHub
  link="https://github.com/octa-quintero"
  icon={FaGithub}
  colStart={1}
  colSpan={2}
  rowStart={4}
  rowSpan={1}
/>


        <CardSkills
          background="bg-gradient-to-b from-[#1e2124] to-[#2f3136]"
          colStart={3} // Comienza en la columna 1
          colSpan={1}
          rowStart={4}
          rowSpan={1}
        />
        <CardText
          background="bg-gradient-to-b from-[#1e2124] to-[#2f3136]"
          titleKey=""
          mainText="+4"
          subtitleKey="YEARS OLD"
          colStart={4} // Comienza en la columna 1
          colSpan={1}
          rowStart={4}
          rowSpan={1}
        />
        <SpotifyCard
          background="bg-[#1ed760]"
          colStart={1}
          colSpan={2}
          rowStart={5}
          rowSpan={1}
        />
        <CardDiscord
          userId="460652984175689743"
          colStart={3}
          colSpan={1}
          rowStart={5}
          rowSpan={1}
          invitationLink="https://discord.gg/Y3cf2PARER"
        />
        <CardEmail
          link="https://google.com"
          icon={SiGmail}
          colStart={4}
          colSpan={1}
          rowStart={5}
          rowSpan={1}
        />
        <CardTime
          background="bg-gradient-to-t from-[#1e2124] to-[#2f3136]"
          city="Milan"
          colStart={2}
          colSpan={2}
          rowStart={6}
          rowSpan={1} titleKey={""} subtitleKey={""}/>
        <CardWhatsApp
                icon={FaWhatsapp}
                link="https://wa.me/+393445549403"
                  colStart={1}
                  colSpan={1}
                  rowStart={6}
                  rowSpan={1}
        />
      </Grid>
    </>
  );
}
