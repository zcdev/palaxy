"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import WavePrismBackground from '../components/background/TransmissionWave';
import Button from '../components/ui/Button';
import { purpleButton } from '../styles';

interface Props {
    responses: Record<string, string>;
    onReturn: () => void;
}

export function Transmission({ responses, onReturn }: Props) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-transparent text-white text-center w-full">
            <WavePrismBackground className="w-full bg-transparent mx-auto">
                <div className="px-6">
                    <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">Transmission Complete</h1>
                    <p className="font-body text-xl mb-5">
                        Your responses have been launched into the Palaxy Core. <br className="hidden sm:block" />
                        The universe just got a little more self&#8209;aware, <br className="hidden sm:block" />thanks to you.
                    </p>
                    <Image src="/avatars/palaxy-pals.png" className="inline-block" width={400} height={400} alt="Palaxy Pals" />
                    <p className="font-body text-lg text-white/70 mt-6 mb-4 max-w-xl">
                        Remember: the Palaxy isn’t far away. It’s the coworker next to you, the stranger in line, or the friend who’s secretly your opposite cosmic wavelength. Stay curious, keep orbiting, and maybe—just maybe—you’ll meet your neighboring force at the next coffee nebula. See you again!
                    </p>
                    <Button type="button" onClick={onReturn} className={purpleButton} text="Return Home" />
                </div>
            </WavePrismBackground>
        </section>
    );
}
