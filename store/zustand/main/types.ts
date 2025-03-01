interface CameraConfig {
  position: [number, number, number];
  fov: number;
}
export interface MainTypeStore {
  fadeOut:boolean,
  showMainContent:boolean,
  cameraConfig:CameraConfig,
  currentImage:string,
  setCurrentImage: (currentImage:string) => void;
  setFadeOut: (fadeOut:boolean) => void;
  setShowMainContent: (showMainContent:boolean) => void;
  setCameraConfig: (cameraConfig:CameraConfig) => void;

}
