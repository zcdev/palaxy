'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

type Props = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

const hoverScope: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
};

const glowOverlay: Variants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
};

export default function AvatarImage({
    src,
    alt,
    width = 350,
    height = 350,
    className = '',
}: Props) {
    return (
        <motion.div
            className="relative inset-0 rounded-full"
            variants={hoverScope}
            initial="rest"
            animate="rest"
            whileHover="hover"
        >
            <div className="avatar-img">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{ width: 'auto', height: 'auto' }}
                    className={className}
                    loading="lazy"
                />
                <motion.div
                    className="absolute inset-0 rounded-full bg-white/30 blur-lg pointer-events-none"
                    variants={glowOverlay}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                />
            </div>
        </motion.div>
    );
}
