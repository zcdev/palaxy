'use client';

interface Props {
    responses: Record<string, string>;
}

export function Transmission({ responses }: Props) {
    return (
        <div className="text-white p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Transmission Complete</h2>
            <p className="mb-6">
                Your responses have been launched into the Palaxy Core. The universe just got
                a little more self-aware—thanks to you.
            </p>
            <p className="text-sm text-gray-300">
                Remember: the Palaxy isn’t far away. It’s the coworker next to you, the
                stranger in line, or the friend who’s secretly your opposite cosmic wavelength.
                Stay curious, keep orbiting, and maybe—just maybe—you’ll meet your neighboring
                force at the next coffee nebula. ☕✨
            </p>
        </div>
    );
}
