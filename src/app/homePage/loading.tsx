import { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NeuralNetwork from "./neuralNetwork";

// hook سفارشی برای دریافت اندازه صفحه
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};

const Loading = () => {
    const { width, height } = useWindowSize();  // استفاده از hook سفارشی برای دریافت اندازه پنجره

    // محاسبه فاصله دوربین به طوری که 80٪ صفحه را بپوشاند
    const cameraDistance = useMemo(() => {
        if (width >= 1024) {  // سایز لپ‌تاپ و بالاتر
            return Math.max(width, height) / 80;  // 80 درصد از صفحه
        }
        return Math.max(width, height) / 20; // برای دستگاه‌های کوچک‌تر
    }, [width, height]);

    return (
        <Canvas camera={{ position: [0, 0, cameraDistance] }}>
            <NeuralNetwork />
            <OrbitControls />
        </Canvas>
    );
};

export default Loading;
