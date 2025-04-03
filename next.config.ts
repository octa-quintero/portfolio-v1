import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.discordapp.com",
      "openweathermap.org",
    ],
  },
  i18n: {
    defaultLocale: "en", // El idioma por defecto
    locales: ["en", "es"], // Los idiomas disponibles
    localeDetection: false,
  },
  distDir: '.next', // Cambiado de 'build' a '.next'
};

export default nextConfig;
