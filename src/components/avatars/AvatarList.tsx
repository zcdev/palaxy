'use client';

import { motion } from 'framer-motion';
import AvatarCard from './AvatarCard';
import { avatars } from '@/data/avatars';

export default function CharacterGallery() {
    return (
        <section className="relative z-10 mx-auto max-w-auto px-6 py-6">
            <motion.h2
                className="font-headline mb-10 text-center text-3xl text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Meet the pals
            </motion.h2>
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
                {avatars.map((ch) => (
                    <motion.div key={ch.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                        <AvatarCard {...ch} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
