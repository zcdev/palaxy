'use client';
import ResponsiveImage from './ui/ResponsiveImage';
import type { Avatar } from '../types';

interface Props {
    onSelect: (id: string) => void;
}

const mockAvatars: Avatar[] = [
    { id: 'zarnok', name: 'Zarnok', tagline: 'Master of Cosmic Logic', intro: '', image: '/avatars/zarnok.png', forces: [], counterforce: '' },
    { id: 'icy-7', name: 'Icy-7', tagline: 'AI Sage of Frozen Jupiter', intro: '', image: '/avatars/ic7.png', forces: [], counterforce: '' },
    { id: 'orbitz', name: 'Orbitz', tagline: 'Reflective Explorer of Neptune', intro: '', image: '/avatars/orbitz.png', forces: [], counterforce: '' },
    { id: 'blip', name: 'Blip', tagline: 'Empath of the Moon Colonies', intro: '', image: '/avatars/blip.png', forces: [], counterforce: '' },
    { id: 'glimbo', name: 'Glimbo', tagline: 'Influencer of the Constellations', intro: '', image: '/avatars/glimbo.png', forces: [], counterforce: '' },
    { id: 'flarb', name: 'Captain Flarb', tagline: 'Starship Navigator of the Sun', intro: '', image: '/avatars/flarb.png', forces: [], counterforce: '' },
];

export function AvatarGrid({ onSelect }: Props) {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 p-6 justify-center">
            {mockAvatars.map((a) => (
                <button
                    key={a.id}
                    onClick={() => onSelect(a.id)}
                >
                    <div className="flex flex-col items-center text-center font-body">
                        <div className="relative">
                            <ResponsiveImage src={a.image} alt={a.name} />
                            <h3 className="mt-3 text-xl font-semibold text-white">{a.name}</h3>
                            <p className="text-[13px] text-white/70">{a.tagline}</p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}
