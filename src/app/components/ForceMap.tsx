'use client';

import type { ForceMapProps } from '../types';
import IdentityCard from "./force/IdentityCard";
import NeighborCard from './force/NeighborCard';
import CounterforceCard from './force/CounterforceCard';
import { Button } from "../components/ui";
import { purpleButton } from '../styles';

export function ForceMap({ avatar, mockAvatars, onNext }: ForceMapProps) {

    return (
        <section className="text-center text-white mx-6 md:px-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-headline font-bold md:mt-0 mb-6">Forces Detected</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                <IdentityCard avatar={avatar} />
                <NeighborCard avatar={avatar} mockAvatars={mockAvatars} />
                <CounterforceCard avatar={avatar} mockAvatars={mockAvatars} />
            </div>
            <Button
                onClick={onNext}
                className={purpleButton}
                text="Take Survey"
            />
        </section>
    );
}
