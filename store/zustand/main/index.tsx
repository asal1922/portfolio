import { create } from 'zustand';
import { MainTypeStore } from './types';
import images from '@/assets/images';
export const useMainStore = create<MainTypeStore>((set) => ({
  currentImage: images.loading,
  fadeOut: false,
  showMainContent: false,
  cameraConfig: {
    position: [0, 10, 8],
    fov: 35,
  },
  setCurrentImage: (currentImage) => {
    set((state) => ({ ...state, currentImage }));
  },
  setFadeOut: (fadeOut) => {
    set((state) => ({ ...state, fadeOut }));
  },

  setShowMainContent: (showMainContent) => {
    set((state) => ({ ...state, showMainContent }));
  },
  setCameraConfig: (cameraConfig) => {
    set((state) => ({ ...state, cameraConfig }));
  },

}
));
