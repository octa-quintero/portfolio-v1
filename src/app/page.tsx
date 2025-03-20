import "./globals.css";
import { FaLinkedinIn, FaGithub, FaCode, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Grid from "@/components/ui/container/container";
import CardLinkedin from "@/components/ui/cards-home/card-linkedin";
import CardText from "@/components/ui/cards-home/card-text";
import CardInformation from "@/components/ui/cards-home/card-information";
import ThemeCard from "@/components/ui/cards-home/card-theme";
import CardDiscord from "@/components/ui/cards-home/card-discord";
import SpotifyCard from "@/components/ui/cards-home/card-spotify";
import CardTime from "@/components/ui/cards-home/card-time";
import CardGitHub from "@/components/ui/cards-home/card-github";
import CardProject from "@/components/ui/cards-home/card-project";
import CardSkills from "@/components/ui/cards-home/card-skills";
import CardEmail from "@/components/ui/cards-home/card-email";
import CardWhatsApp from "@/components/ui/cards-home/whatsapp";
import LanguageSwitch from "@/components/ui/cards-home/card-languaje";


export default function App() {
  return (
    <>
      <Grid columns={4} rows={6}>
      <CardInformation
  image="/logo.png"
  title="full_stack_developer" // Clave de traducción
  name="octavio_quintero"
  text="programador_texto"
  background="bg-gradient-to-b from-[#0D0D0D] via-[#1e2124] to-[#0D0D0D]"
  colStart={1}
  colSpan={3}
  rowStart={1}
  rowSpan={2}
className="max-sm:col-start-1 max-sm:col-span-4 max-sm:row-start-1 max-sm:row-span-1"
/>

        <LanguageSwitch
          background="bg-gradient-to-b from-[#1e2124] to-[#2f3136]"
          colStart={4} 
          colSpan={1}
          rowStart={1}
          rowSpan={1}
className="max-sm:col-start-1 max-sm:col-span-2 max-sm:row-start-2 max-sm:row-span-1"

        />
        <ThemeCard
          background="bg-gradient-to-t from-[#1e2124] to-[#2f3136]"
          colStart={4}
          colSpan={1}
          rowStart={2}
          rowSpan={1} titleKey={""} subtitleKey={""} />
          
<CardText
  background="bg-gradient-to-b from-[#1e2124] to-[#2f3136]"
  titleKey="age" // Usamos la clave de traducción
  mainText="31"
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
  link="/projects"
  Icon={<FaCode size={45} className="text-gray-900 group-hover:text-white transition-all duration-300" />} // Pasa el icono como JSX
  colStart={3}
  colSpan={2}
  rowStart={3}
  rowSpan={1}
  titleKey="project"
  subtitleKey="project_description"
/>


<CardGitHub
  link="https://github.com/octa-quintero"
  Icon={<FaGithub size={45} className="text-gray-900 group-hover:text-white transition-all duration-300" />} // Icono como JSX
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
          link="octa.quinteroo@gmail.com"
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
