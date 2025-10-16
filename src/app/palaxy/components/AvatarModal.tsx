'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    avatarId: string;
    onConfirm: () => void;
}

export function AvatarModal({ avatarId, onConfirm }: Props) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-gray-900 p-6 rounded-2xl max-w-lg text-center text-white shadow-lg"
                >
                    <h2 className="text-2xl font-bold mb-3">{avatarId}</h2>
                    <p className="text-sm mb-6">[Avatar bio placeholder]</p>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors"
                    >
                        This sounds like me
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
