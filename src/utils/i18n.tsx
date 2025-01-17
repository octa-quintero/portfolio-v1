import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Aquí definimos los recursos de los idiomas
const resources = {
  en: {
    translation: {
      "location": "LOCATION",
      "full_stack_developer": "FULL STACK DEVELOPER",
      "age": "AGE",
      "years_old": "YEARS OLD",
      "octavio_quintero": "Octavio Quintero",
      "programador_texto": "Currently, I am developing as a Full Stack programmer, where I implement my ability to create complete applications, from conceptualization to execution.",
      "project": "PROJECT",
      "project_description": "Discover my latest projects",
      "github": "GITHUB",
      "github_description": "Explore my projects and contributions",
      "recently_listened": "Recently listened", // Traducción agregada
      "listen_on_spotify": "Listen on Spotify", // Traducción agregada
      "clear_sky": "Clear Sky",
      "milan": "Milan, IT",
      "online": "Online",
      "offline": "Offline",
      "do_not_disturb": "Do Not Disturb",
      "idle": "Idle",
      "unknown": "Unknown",
      "currently_in": "Currently in"
    },
  },
  es: {
    translation: {
      "location": "UBICACIÓN",
      "full_stack_developer": "DESARROLLADOR FULL STACK",
      "age": "EDAD",
      "years_old": "AÑOS",
      "octavio_quintero": "Octavio Quintero",
      "programador_texto": "Actualmente, me estoy desarrollando como programador Full Stack, donde implemento mi capacidad para crear aplicaciones completas, desde la conceptualización hasta la ejecución.",
      "project": "PROYECTOS",
      "project_description": "Descubre mis proyectos más recientes",
      "github": "GITHUB",
      "github_description": "Explora mis proyectos y contribuciones",
      "recently_listened": "Escuchado recientemente", // Traducción agregada
      "listen_on_spotify": "Escuchar en Spotify", // Traducción agregada
      "clear_sky": "Cielo claro",
      "milan": "Milán, IT",
      "online": "En línea",
      "offline": "Desconectado",
      "do_not_disturb": "No molestar",
      "idle": "Ausente",
      "unknown": "Desconocido",
      "currently_in": "Actualmente en"
    },
  },
};

i18n
  .use(initReactI18next) // Conectamos con React
  .init({
    resources,
    lng: "en", // Idioma predeterminado
    fallbackLng: "en", // Si el idioma no está disponible, usa inglés
    interpolation: {
      escapeValue: false, // React ya se encarga del escape de valores
    },
  });

export default i18n;
