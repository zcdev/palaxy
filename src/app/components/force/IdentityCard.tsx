import type { AvatarBaseProps } from '../../types';
import { AvatarImage } from "../../components/avatar";

export default function IdentityCard({ avatar }: AvatarBaseProps) {

    return (
        <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 px-6 md:px-10 py-8 shadow-md backdrop-blur-sm">
            <span className="font-body text-lg text-white/70">Your Cosmic Identity</span>
            <h2 className="font-headline text-xl font-bold tracking-wide mt-2">{avatar.name}</h2>
            <div className="inline-block mt-6"><AvatarImage src={avatar.image} alt={avatar.name} /></div>
            <p className="font-body text-md text-center lg:text-left mt-6">{avatar.bio}</p>
            <p className="text-sm text-center lg:text-left leading-relaxed tracking-normalt text-white/70 mt-6">
                Species: {avatar.species}<br />
                Homeworld: {avatar.homeworld}<br />
                Planet: {avatar.planet}
            </p>
        </div>
    );
}