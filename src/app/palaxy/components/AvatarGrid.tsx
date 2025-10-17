'use client';
import { motion } from 'framer-motion';
import AvatarImage from './AvatarImage';
import { mockAvatars } from '../data';
import { Avatar } from '../types';

interface Props {
    onSelect: (avatar: Avatar) => void;
    avatars: Avatar[];
}

const AvatarCard = ({ avatar, onSelect }: { avatar: Avatar; onSelect: (avatar: Avatar) => void; }) => (
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

export function AvatarGrid({ avatars, onSelect }: Props) {
    avatars = mockAvatars;
    return (
        <section className="relative z-10 mx-auto max-w-auto px-6 py-6">
            <motion.div
                className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {avatars.map((avatar) => (
                    <motion.div key={avatar.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                        <AvatarCard avatar={avatar} onSelect={onSelect} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

