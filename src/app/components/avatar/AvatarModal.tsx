'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Avatar } from '../../types';
import Button from '../ui/Button';
import { purpleButton } from '../../styles';

type Props = {
    avatar: Avatar;
    onConfirm: () => void;
    onDeny: () => void;
};

export function AvatarModal({ avatar, onConfirm, onDeny }: Props) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6 overflow-y-auto"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    className="bg-white/80 p-10 rounded-2xl max-w-lg text-center text-black shadow-lg overflow-y-auto"
                >
                    <h2 className="font-headline text-2xl font-bold mb-3">{avatar.name}</h2>
                    <p className="font-body text-md mb-6 leading-loose text-left">{avatar.intro}</p>
                    <Button
                        onClick={onConfirm}
                        className={purpleButton}
                        text="Yes, this sounds like me"
                    />
                    <Button
                        onClick={onDeny}
                        className={purpleButton}
                        text="No, this doesn't sound like me"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
