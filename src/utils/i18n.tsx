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
      "currently_in": "Currently in",
      "crewland_description": "Crewland 🚀, an application where I was the Backend team leader. We worked for weeks to solve the main challenges of attending festivals — from finding companions to managing transport and lodging. Our mission was to develop a centralized platform that connects people with similar interests and simplifies the entire planning process.",
      "eventmap_description": "EventMap🚗, an app for Uber, Cabify and similar drivers. It allows you to view high-demand areas on an interactive map, filter upcoming events, and optimize routes with Google Maps. It also enables event creation and notifications to maximize earnings and reduce expenses. A game-changer for trip planning!",
      "pixelgaming_description": "PixelGaming🌻 is a site for video game lovers where you can manage your collection, share experiences, and discover new titles. It offers search by name, category filtering, profile and game management tools, an admin panel for a safe environment, token-based password recovery, and a Top2024 section with the most popular games. Users can also leave reviews and feedback.",
      "talentplace_description": "TalentPlace🚀 was created to connect companies, startups, and junior IT developers on an intuitive and efficient platform. Its goal is to simplify the talent search process, giving companies quick access to emerging professionals and helping juniors find job opportunities.",
      "portfolio_description": "This is my personal portfolio, designed to showcase my projects and skills. It also integrates APIs like Discord and Spotify to provide real-time updates on my status and activity. Through these connections, the portfolio offers a more dynamic and current view of my interests and work.",
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
      "currently_in": "Actualmente en",
      "crewland_description": "Crewland 🚀, una aplicación en la que tuve el rol de líder del equipo Backend. Durante semanas trabajamos para resolver los principales desafíos de asistir a festivales, desde encontrar compañía hasta gestionar el transporte y el alojamiento. Nuestra misión fue desarrollar una plataforma centralizada que conecte personas con intereses similares y simplifique toda la planificación.",
      "eventmap_description": "EventMap🚗, una app para conductores de Uber, Cabify y similares. Permite visualizar zonas con alta demanda en un mapa interactivo, filtrar eventos próximos y optimizar recorridos con Google Maps. También facilita la creación de eventos y notificaciones para maximizar ganancias y reducir gastos. ¡Un cambio de juego para la planificación de viajes!",
      "pixelgaming_description": "PixelGaming🌻 es un sitio para los amantes de los videojuegos, donde puedes gestionar tu colección, compartir experiencias y descubrir nuevos títulos. Ofrece búsqueda por nombre, filtrado por categorías, y herramientas para gestionar tu perfil y juegos. Con un panel de administración para mantener un entorno seguro, restauración de contraseñas mediante token y una sección Top2024 con los juegos más populares, todo con una interfaz visualmente atractiva y responsive. Además, permite a los usuarios dejar reseñas y opiniones sobre cada juego.",
      "talentplace_description": "TalentPlace🚀 fue creada para conectar empresas, startups y desarrolladores IT juniors en una plataforma intuitiva y eficiente. Su objetivo es simplificar el proceso de búsqueda de talento, brindando a las empresas acceso rápido a profesionales en crecimiento y facilitando a los juniors oportunidades para ingresar al mundo laboral.",
      "portfolio_description": "Este es mi portafolio personal, diseñado para mostrar mis proyectos y habilidades. Además, cuenta con integración a APIs como la de Discord y Spotify, para obtener información en tiempo real sobre mi estado y actividad. A través de estas conexiones, el portafolio ofrece una visión más dinámica y actualizada de mis intereses y trabajo.",
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
