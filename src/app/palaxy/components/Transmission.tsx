"use client";

import Image from "next/image";
import WavePrismBackground from "@/app/palaxy/components/background/TransmissionWave";

interface Props {
    responses: Record<string, string>;
}

export function Transmission({ responses }: Props) {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-transparent text-white text-center w-full p-4 mx-6 my-10 md:mt-0">
            <WavePrismBackground className="w-full bg-transparent mx-auto">
                <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">Transmission Complete</h1>
                <p className="font-body text-xl mb-5">
                    Your responses have been launched into the Palaxy Core. <br className="hidden sm:block" />
                    The universe just got a little more self&#8209;aware, <br className="hidden sm:block" />thanks to you.
                </p>
                <Image src="/avatars/palaxy-group.png" className="inline-block" width={400} height={400} alt="Palaxy Group" />
                <p className="font-body text-lg text-white/70 mt-6 max-w-xl">
                    Remember: the Palaxy isn’t far away. It’s the coworker next to you, <br className="hidden sm:block" />the stranger in line, or the friend who’s secretly your opposite cosmic wavelength. Stay curious, keep orbiting, and maybe—just maybe—you’ll meet your neighboring force at the next coffee nebula.
                </p>
            </WavePrismBackground>
        </section>
    );
}
