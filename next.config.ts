import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.discordapp.com', 'openweathermap.org'],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    localeDetection: false,
  },
  distDir: '.next',
};

export default nextConfig;
