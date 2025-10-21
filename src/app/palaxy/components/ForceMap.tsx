'use client';

import type { Avatar } from '@palaxy/types';
import { AvatarImage } from "@palaxy/components/avatar";
import { Button } from "@palaxy/components/ui";
import { purpleButton } from '@palaxy/styles';

interface Props {
    avatar: Avatar;
    onNext: () => void;
    mockAvatars: Avatar[];
}

export function getAvatarById(avatars: Avatar[], id: string) {
    return avatars.find((avatar) => avatar.id === id);
}

export function ForceMap({ avatar, onNext, mockAvatars }: Props) {

    const neighborLeftData = getAvatarById(mockAvatars, avatar.forces.neighbors[0].id);
    const neighborRightData = getAvatarById(mockAvatars, avatar.forces.neighbors[1].id);
    const counterforceData = getAvatarById(mockAvatars, avatar.forces.counterforce.id);

    return (
        <div className="text-center text-white px-8">
            <h1 className="text-3xl font-headline font-bold mb-6">Forces Detected</h1>
            <div className="grid grid-cols-3 gap-8 mb-6">
                <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 px-10 py-8 shadow-md backdrop-blur-sm">
                    <span className="font-body text-lg text-white/70">Your Cosmic Identity</span>
                    <h2 className="font-headline text-xl font-bold tracking-wide mt-2">{avatar.name}</h2>
                    <div className="inline-block mt-6"><AvatarImage src={avatar.image} alt={avatar.name} /></div>
                    <p className="font-body text-md text-left mt-6">{avatar.bio}</p>
                    <p className="text-sm text-left leading-relaxed tracking-normalt text-white/70 mt-6">
                        Species: {avatar.species}<br />
                        Homeworld: {avatar.homeworld}<br />
                        Planet: {avatar.planet}
                    </p>
                </div>
                <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 px-10 py-8 shadow-md backdrop-blur-sm">
                    <span className="font-body text-lg text-white/70">Neighboring Forces</span>
                    <div className="grid grid-cols-3 items-center pt-8">
                        <div className="avatar-img"><AvatarImage src={neighborLeftData!.image} alt={neighborLeftData!.name} />
                        </div>
                        <div className="col-span-2 pl-6">
                            <h2 className="font-headline text-xl font-bold text-left leading-relaxed tracking-wide">{neighborLeftData!.name}</h2>
                            <p className="font-body text-md text-left pt-2">{avatar.forces.neighbors[0].note}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center pt-8">
                        <div className="avatar-img"><AvatarImage src={neighborRightData!.image} alt={neighborRightData!.name} />
                        </div>
                        <div className="col-span-2 pl-6">
                            <h2 className="font-headline text-xl font-bold text-left leading-relaxed tracking-wide">{neighborRightData!.name}</h2>
                            <p className="font-body text-md text-left pt-2">{avatar.forces.neighbors[1].note}</p>
                        </div>
                    </div>
                    <div className="w-full text-white/70 pt-8">
                        <p className="text-sm text-left tracking-normal leading-relaxed mt-4">{avatar.name}’s Cosmic Synergy: {avatar.synergy}</p>
                        <p className="text-sm text-left tracking-normal leading-relaxed mt-4">{avatar.name}’s Palaxy Psyche: {avatar.psyche}</p>
                    </div>
                </div>
                <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 px-10 py-8 shadow-md backdrop-blur-sm">
                    <span className="font-body text-lg text-white/70">Counterforce</span>
                    <h2 className="font-headline text-xl font-bold tracking-wide mt-2">{counterforceData!.name}</h2>
                    <div className="inline-block mt-6"><AvatarImage src={counterforceData!.image} alt={counterforceData!.name} /></div>
                    <p className="font-body text-md text-left mt-6">{avatar.forces.counterforce.note}</p>
                    <p className="font-body text-md text-left mt-4 text-white">Palaxy Pals’ Words: <em>"True friends share everything — even their last slice of asteroid pizza."</em></p>
                    <p className="text-sm text-left tracking-normal leading-relaxed mt-4 text-white/70">{counterforceData!.name}’s Wavelength: {counterforceData!.wavelength}</p>
                    <p className="text-sm text-left tracking-normal leading-relaxed text-white/70">{avatar.name}’s Wavelength: {avatar.wavelength}</p>
                </div>
            </div>
            <Button
                onClick={onNext}
                className={purpleButton}
                text="Take Survey"
            />
        </div>
    );
}
