import type { AvatarWithListProps } from '@palaxy/types';
import { AvatarImage } from "@palaxy/components/avatar";
import { getAvatarById } from "@palaxy/utils";


export default function CounterforceCard({ avatar, mockAvatars }: AvatarWithListProps) {

    const counterforceData = getAvatarById(mockAvatars, avatar.forces.counterforce.id);
    if (!counterforceData) return null;

    return (
        <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 px-4 md:px-10 py-8 shadow-md backdrop-blur-sm">
            <span className="font-body text-lg text-white/70">Counterforce</span>
            <h2 className="font-headline text-xl font-bold tracking-wide mt-2">{counterforceData!.name}</h2>
            <div className="inline-block mt-6"><AvatarImage src={counterforceData!.image} alt={counterforceData!.name} /></div>
            <p className="font-body text-md text-center lg:text-left mt-6">{avatar.forces.counterforce.note}</p>
            <p className="font-body text-md text-center lg:text-left mt-4 text-white">Palaxy Pals’ Words: <em>"True friends share everything — even their last slice of asteroid pizza."</em></p>
            <p className="text-sm text-center lg:text-left tracking-normal leading-relaxed mt-4 text-white/70">{counterforceData!.name}’s Wavelength: {counterforceData!.wavelength}</p>
            <p className="text-sm text-center lg:text-left tracking-normal leading-relaxed mt-4 text-white/70">{avatar.name}’s Wavelength: {avatar.wavelength}</p>
        </div>
    );
}