import { create } from 'zustand'

interface AuthState {
  accessToken: string | null;
  setAccessToken: (accessToken: string |null) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken: string | null) => set({ accessToken }),
  isAuth: true,
  setIsAuth: (isAuth: boolean) => set({ isAuth })
}))
