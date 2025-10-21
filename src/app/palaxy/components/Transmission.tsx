'use client';

import Image from 'next/image';

interface Props {
    responses: Record<string, string>;
}

export function Transmission({ responses }: Props) {
    return (
        <div className="text-white text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-headline font-bold mb-4">Transmission Complete</h1>
            <p className="font-body text-xl mb-5">
                Your responses have been launched into the Palaxy Core.<br className="hidden sm:block" />
                The universe just got a little more self-aware—thanks to you.
            </p>
            <Image src="/avatars/palaxy-group.png" className="inline-block" width={400} height={400} alt="Palaxy Group" />
            <p className="font-body text-lg text-white/70 mt-6">
                Remember: the Palaxy isn’t far away. It’s the coworker next to you, <br className="hidden sm:block" />the stranger in line, or the friend who’s secretly your opposite cosmic wavelength. Stay curious, keep orbiting, and maybe—just maybe—you’ll meet your neighboring force at the next coffee nebula.
            </p>
        </div>
    );
}
