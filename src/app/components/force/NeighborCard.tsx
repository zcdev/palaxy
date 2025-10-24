import type { AvatarWithListProps } from '../../types';
import { AvatarImage } from "../../components/avatar";
import { getAvatarById } from "../../utils";

export default function NeighborCard({ avatar, mockAvatars }: AvatarWithListProps) {

    const neighborLeftData = getAvatarById(mockAvatars, avatar.forces.neighbors[0].id);
    const neighborRightData = getAvatarById(mockAvatars, avatar.forces.neighbors[1].id);

    return (
        <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 px-6 md:px-10 py-8 shadow-md backdrop-blur-sm">
            <span className="font-body text-lg text-white/70">Neighboring Forces</span>
            <div className="grid grid-cols-1 xl:grid-cols-3 items-center pt-8">
                <div className="avatar-img mx-auto"><AvatarImage src={neighborLeftData!.image} alt={neighborLeftData!.name} />
                </div>
                <div className="col-span-2 pl-0 xl:pl-6 pt-4 xl:pt-0">
                    <h2 className="font-headline text-xl font-bold text-center xl:text-left leading-relaxed tracking-wide">{neighborLeftData!.name}</h2>
                    <p className="font-body text-md text-center lg:text-left pt-2">{avatar.forces.neighbors[0].note}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 items-center pt-8">
                <div className="avatar-img mx-auto"><AvatarImage src={neighborRightData!.image} alt={neighborRightData!.name} />
                </div>
                <div className="col-span-2 pl-0 xl:pl-6 pt-4 xl:pt-0">
                    <h2 className="font-headline text-xl font-bold text-center xl:text-left leading-relaxed tracking-wide">{neighborRightData!.name}</h2>
                    <p className="font-body text-md text-center lg:text-left pt-2">{avatar.forces.neighbors[1].note}</p>
                </div>
            </div>
            <div className="w-full text-white/70 pt-4 xl:pt-8">
                <p className="text-sm text-center lg:text-left tracking-normal leading-relaxed lg:mt-4">{avatar.name}’s Cosmic Synergy: {avatar.synergy}</p>
                <p className="text-sm text-center lg:text-left tracking-normal leading-relaxed mt-4">{avatar.name}’s Palaxy Psyche: {avatar.psyche}</p>
            </div>
        </div>
    );
}