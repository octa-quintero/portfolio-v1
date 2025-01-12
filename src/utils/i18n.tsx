import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Aquí definimos los recursos de los idiomas
const resources = {
  en: {
    translation: {
      "full_stack_developer": "FULL STACK DEVELOPER",
      "location": "LOCATION",
      "age": "AGE",
      "project": "PROJECT",
      "github": "GITHUB",
      "recently_listened": "Recently listened",
      "listen_on_spotify": "Listen on Spotify",
      "clear_sky": "Clear Sky",
      "milan": "Milan, IT",
      // Agrega otros textos aquí
    },
  },
  es: {
    translation: {
      "full_stack_developer": "DESARROLLADOR FULL STACK",
      "location": "UBICACIÓN",
      "age": "EDAD",
      "project": "PROYECTO",
      "github": "GITHUB",
      "recently_listened": "Escuchado recientemente",
      "listen_on_spotify": "Escuchar en Spotify",
      "clear_sky": "Cielo claro",
      "milan": "Milán, IT",
      // Agrega otros textos aquí
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
