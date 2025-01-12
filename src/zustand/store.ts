import { create } from "zustand";

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
}

export const useStore = create<Store>((set) => ({
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),

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
}));
