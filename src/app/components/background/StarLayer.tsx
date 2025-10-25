'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type StarLayerProps = {
    count: number;
    sizeRange: [number, number];
    durationRange: [number, number];
    opacityRange?: [number, number];
};

type Star = {
    size: number;
    x: number;
    y: number;
    duration: number;
};

export default function StarLayer({
    count,
    sizeRange,
    durationRange,
    opacityRange = [0.2, 1],
}: StarLayerProps) {
    const [stars, setStars] = useState<Star[]>([]);

    // Generate stars only after mount (client-side)
    useEffect(() => {
        const generated = Array.from({ length: count }, () => ({
            size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration:
                Math.random() * (durationRange[1] - durationRange[0]) +
                durationRange[0],
        }));
        setStars(generated);
    }, [count, sizeRange, durationRange]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: star.size,
                        height: star.size,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                    }}
                    animate={{
                        opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
