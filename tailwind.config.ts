import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /grid-cols-\d+/ },
    { pattern: /grid-rows-\d+/ },
    { pattern: /col-start-\d+/ },
    { pattern: /col-span-\d+/ },
    { pattern: /row-start-\d+/ },
    { pattern: /row-span-\d+/ },
    { pattern: /aspect-\[1\/1\]/ },
  ],
  theme: {
    extend: {
      animation: {
        "glowing-green": "glowing-green 1.5s ease-in-out infinite",
        "glowing-gray": "glowing-gray 1.5s ease-in-out infinite",
        "glowing-red": "glowing-red 1.5s ease-in-out infinite",
        "glowing-orange": "glowing-orange 1.5s ease-in-out infinite",
      },
      keyframes: {
        "glowing-green": {
          "0%": {
            filter: "drop-shadow(0 0 4px rgba(72, 255, 0, 0.3)) drop-shadow(0 0 8px rgba(72, 255, 0, 0.5))",
          },
          "50%": {
            filter: "drop-shadow(0 0 6px rgba(72, 255, 0, 0.5)) drop-shadow(0 0 12px rgba(72, 255, 0, 0.7))",
          },
          "100%": {
            filter: "drop-shadow(0 0 4px rgba(72, 255, 0, 0.3)) drop-shadow(0 0 8px rgba(72, 255, 0, 0.5))",
          },
        },
        "glowing-gray": {
          "0%": {
            filter: "drop-shadow(0 0 4px rgba(169, 169, 169, 0.3)) drop-shadow(0 0 8px rgba(169, 169, 169, 0.5))",
          },
          "50%": {
            filter: "drop-shadow(0 0 6px rgba(169, 169, 169, 0.5)) drop-shadow(0 0 12px rgba(169, 169, 169, 0.7))",
          },
          "100%": {
            filter: "drop-shadow(0 0 4px rgba(169, 169, 169, 0.3)) drop-shadow(0 0 8px rgba(169, 169, 169, 0.5))",
          },
        },
        "glowing-red": {
          "0%": {
            filter: "drop-shadow(0 0 4px rgba(255, 0, 0, 0.3)) drop-shadow(0 0 8px rgba(255, 0, 0, 0.5))",
          },
          "50%": {
            filter: "drop-shadow(0 0 6px rgba(255, 0, 0, 0.5)) drop-shadow(0 0 12px rgba(255, 0, 0, 0.7))",
          },
          "100%": {
            filter: "drop-shadow(0 0 4px rgba(255, 0, 0, 0.3)) drop-shadow(0 0 8px rgba(255, 0, 0, 0.5))",
          },
        },
        "glowing-orange": {
          "0%": {
            filter: "drop-shadow(0 0 4px rgba(255, 165, 0, 0.3)) drop-shadow(0 0 8px rgba(255, 165, 0, 0.5))",
          },
          "50%": {
            filter: "drop-shadow(0 0 6px rgba(255, 165, 0, 0.5)) drop-shadow(0 0 12px rgba(255, 165, 0, 0.7))",
          },
          "100%": {
            filter: "drop-shadow(0 0 4px rgba(255, 165, 0, 0.3)) drop-shadow(0 0 8px rgba(255, 165, 0, 0.5))",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
