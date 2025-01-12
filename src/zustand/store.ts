import { create } from "zustand";
import i18n from "../utils/i18n"; // Asegúrate de que i18n esté configurado correctamente

interface Store {
  darkMode: boolean;
  toggleTheme: () => void;
  token: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activity: any | null;
  setToken: (token: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setActivity: (activity: any) => void;
  fetchSpotifyToken: () => Promise<void>;
  language: string;
  changeLanguage: (lang: string) => void;
}

export const useStore = create<Store>((set) => ({
  // Tema oscuro
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),

  // Spotify
  token: null,
  activity: null,
  setToken: (token) => set({ token }),
  setActivity: (activity) => set({ activity }),
  fetchSpotifyToken: async () => {
    try {
      const response = await fetch('/api/spotify-token', {
        method: 'POST',
      });
      const data = await response.json();
      set({ token: data.access_token });
    } catch (error) {
      console.error('Error fetching Spotify token:', error);
    }
  },

  // Idioma
  language: "en", // Idioma predeterminado
  changeLanguage: (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma en i18next
    set({ language: lang });  // Actualiza el estado global
  },
}));
