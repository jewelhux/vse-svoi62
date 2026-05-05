import { create } from "zustand";

type UiState = {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen })
}));
