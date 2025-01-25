import { create } from 'zustand';

interface NavigationStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));