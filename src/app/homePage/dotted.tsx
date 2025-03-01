import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
const Dotted = ({cameraConfig}:any) => {
    interface MousePos {
        x: number;
        y: number;
      }
      
   
      function MovingDots() {
        const pointsRef = useRef<THREE.Points | null>(null);
        const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
        const [waveAmplitude, setWaveAmplitude] = useState<number>(20);
        const [rotationSpeed, setRotationSpeed] = useState<number>(0.1);
        const [isInitialRotationDone, setInitialRotationDone] = useState<boolean>(false);
      
        useFrame(({ clock }) => {
          const time = clock.getElapsedTime();
          const positions = pointsRef.current?.geometry.attributes.position.array;
      
          if (positions) {
            if (!isInitialRotationDone) {
              if (pointsRef.current) {
                pointsRef.current.rotation.y += rotationSpeed;
              }
              if (pointsRef.current && pointsRef.current.rotation.y >= 2 * Math.PI) {
                setInitialRotationDone(true);
              }
            }
      
            for (let i = 0; i < positions.length; i += 3) {
              const x = positions[i];
              const y = positions[i + 1];
              const distanceToMouse = Math.sqrt((x - mousePos.x) ** 2 + (y - mousePos.y) ** 2);
              positions[i + 2] = Math.sin(distanceToMouse - time * 0.5) * Math.cos(distanceToMouse * 0.4) * waveAmplitude;
            }
      
            if (pointsRef.current) {
              pointsRef.current.geometry.attributes.position.needsUpdate = true;
            }
          }
        });
      
        const generateGrid = (): Float32Array => {
          const numPoints = 500;
          const width = window.innerWidth;
          const spacing = width / numPoints;
          const points: number[] = [];
          const bottomMargin = 10;
      
          for (let x = -width / 2; x < width / 2; x += spacing) {
            for (let y = -200 + bottomMargin; y < 200 + bottomMargin; y += spacing) {
              points.push(x, y, 0);
            }
          }
      
          return new Float32Array(points);
        };
      
        const handleMouseMove = (event: ThreeEvent<PointerEvent>) => {
          const x = event.clientX - window.innerWidth / 2;
          const y = window.innerHeight / 2 - event.clientY;
          setMousePos({ x, y });
      
          const newAmplitude = Math.max(1, Math.min(30, (window.innerHeight - y) / 10));
          setWaveAmplitude(newAmplitude);
        };
      
        return (
          <points ref={pointsRef} rotation={[-Math.PI / 2.5, 0, 0]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={generateGrid()}
                count={generateGrid().length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              color="#1A73E8"
              size={2}
              transparent={true}
              opacity={0.3}
            />
            <mesh onPointerMove={handleMouseMove} />
          </points>
        );
      }
      
      function CameraAnimation() {
        const { camera } = useThree();
        useEffect(() => {
          let frame: number;
          const start = { z: 10 };
          const end = { z: 150 };
          const duration = 4;
          const startTime = performance.now();
      
          const animate = (time: number) => {
            const elapsed = (time - startTime) / 1000;
            const t = Math.min(elapsed / duration, 1);
            camera.position.z = start.z + (end.z - start.z) * t;
      
            if (t < 1) {
              frame = requestAnimationFrame(animate);
            }
          };
      
          frame = requestAnimationFrame(animate);
      
          return () => cancelAnimationFrame(frame);
        }, [camera]);
      
        return null;
      }
      
    return (
    <Canvas camera={cameraConfig} id='To_Top'>
                <ambientLight intensity={0.5} />
                <MovingDots />
                <CameraAnimation />
                <OrbitControls />
              </Canvas>
    
)
}
export default Dotted;