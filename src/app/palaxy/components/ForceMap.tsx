'use client';

import type { ForceMapProps } from '@palaxy/types';
import IdentityCard from "@palaxy/components/force/IdentityCard";
import NeighborCard from '@palaxy/components/force/NeighborCard';
import CounterforceCard from '@palaxy/components/force/CounterforceCard';
import { Button } from "@palaxy/components/ui";
import { purpleButton } from '@palaxy/styles';
import { getAvatarById } from '../utils';

export function ForceMap({ avatar, mockAvatars, onNext }: ForceMapProps) {
    const counterforceData = getAvatarById(mockAvatars!, avatar.forces.counterforce.id);

    return (
        <div className="text-center text-white px-4 md:px-8">
            <h1 className="text-3xl font-headline font-bold mt-2 md:mt-0 mb-6">Forces Detected</h1>
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
        </div>
    );
}
