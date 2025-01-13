import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Aquí definimos los recursos de los idiomas
const resources = {
  en: {
    translation: {
      "location": "LOCATION",
      "full_stack_developer": "FULL STACK DEVELOPER", // Traducción al inglés
      "age": "AGE",
      "years_old": "YEARS OLD",
      "octavio_quintero": "Octavio Quintero", // Nombre no necesita traducción
      "programador_texto": "Currently, I am developing as a Full Stack programmer, where I implement my ability to create complete applications, from conceptualization to execution.", // Traducción al inglés
      "project": "PROJECT",
      "github": "GITHUB",
      "recently_listened": "Recently listened",
      "listen_on_spotify": "Listen on Spotify",
      "clear_sky": "Clear Sky",
      "milan": "Milan, IT",
    },
  },
  es: {
    translation: {
      "location": "UBICACIÓN",
      "full_stack_developer": "DESARROLLADOR FULL STACK", // Traducción al español
      "octavio_quintero": "Octavio Quintero", // Nombre no necesita traducción
      "age": "EDAD",
      "years_old": "AÑOS",
      "programador_texto": "Actualmente, me estoy desarrollando como programador Full Stack, donde implemento mi capacidad para crear aplicaciones completas, desde la conceptualización hasta la ejecución.", // Texto en español
      "project": "PROYECTO",
      "github": "GITHUB",
      "recently_listened": "Escuchado recientemente",
      "listen_on_spotify": "Escuchar en Spotify",
      "clear_sky": "Cielo claro",
      "milan": "Milán, IT",
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

