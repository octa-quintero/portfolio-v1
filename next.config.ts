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
  },
};

export default nextConfig;
