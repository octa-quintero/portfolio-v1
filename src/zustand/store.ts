import { create } from "zustand";
import i18n from "../utils/i18n"; // Asegúrate de que i18n esté configurado correctamente

interface Store {
  darkMode: boolean;
  toggleTheme: () => void;
  language: string;
  changeLanguage: (lang: string) => void;
}

export const useStore = create<Store>((set) => ({
  // Tema oscuro
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),

  // Idioma
  language: "en", // Idioma predeterminado
  changeLanguage: (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma en i18next
    set({ language: lang });  // Actualiza el estado global
  },
}));
