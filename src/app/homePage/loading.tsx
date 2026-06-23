import { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NeuralNetwork from "./neuralNetwork";

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

const Loading = () => {
  const { width, height } = useWindowSize();

  const cameraDistance = useMemo(() => {
    if (width >= 1024) {
      return Math.max(width, height) / 80;
    }
    return Math.max(width, height) / 20;
  }, [width, height]);

  return (
    <Canvas camera={{ position: [0, 0, cameraDistance] }}>
      <NeuralNetwork />
      <OrbitControls />
    </Canvas>
  );
};

export default Loading;