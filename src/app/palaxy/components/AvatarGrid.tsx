'use client';

import { motion } from 'framer-motion';
import AvatarImage from './AvatarImage';
import { mockAvatars } from '../data';
import type { Avatar } from '../types';

type AvatarCardProps = {
    avatar: Avatar;
    onSelect: (avatar: Avatar) => void;
};

type AvatarGridProps = Pick<AvatarCardProps, 'onSelect'>;

const AvatarCard = ({ avatar, onSelect }: AvatarCardProps) => (
    <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0.1 } }}
        whileTap={{ scale: 0.98 }}
        className="group relative cursor-pointer rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-md backdrop-blur-sm"
        onClick={() => onSelect(avatar)}
    >   <div className="flex flex-col items-center text-center font-body">
            <div className="relative">
                <AvatarImage src={avatar.image} alt={avatar.name} />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">{avatar.name}</h3>
            <p className="text-[13px] text-white/70">{avatar.tagline}</p>
        </div>
    </motion.div>
);

export function AvatarGrid({ onSelect }: AvatarGridProps) {
    return (
        <section className="relative z-10 mx-auto max-w-auto px-6 py-6">
            <h1 className="font-headline text-6xl mb-4">Palaxy</h1>
            <h2 className="text-3xl font-semibold tracking-wider mb-4">Welcome</h2>
            <p className="font-body text-xl mb-10 leading-relaxed tracking-wide">Which cosmic traveler feels like you today?<br />Please choose one:</p>
            <motion.div
                className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 pt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {mockAvatars.map((avatar) => (
                    <motion.div key={avatar.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                        <AvatarCard avatar={avatar} onSelect={onSelect} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

