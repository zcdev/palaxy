'use client';

import { easeInOut, motion } from 'framer-motion';
import { useState } from 'react';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

interface avatarCardProps {
    name: string;
    img: string;
    tagline: string;
    onSelect?: () => void;
}

export default function avatarCard({ name, img, tagline, onSelect }: avatarCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="group relative cursor-pointer rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-md backdrop-blur-sm"
            whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0.1 } }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onSelect}
        >
            <div className="flex flex-col items-center text-center font-body">
                <div className="relative">
                    <ResponsiveImage src={img} alt={name} />
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white/30 blur-lg"
                        animate={{ opacity: hovered ? 1 : 0 }}
                    />
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{name}</h3>
                <p className="text-[13px] text-white/70">{tagline}</p>
            </div>
        </motion.div>
    );
}
