import { LuOrbit } from 'react-icons/lu';

export default function Navbar() {

    return (
        <nav className="navbar fixed top-[20px] left-[20px] w-full z-40">
            <a href="/" aria-label="Palaxy home" className="text-[40px] text-white/70 hover:text-purple-400 transition flex items-center content-center">
                <LuOrbit strokeWidth={2.5} aria-hidden="true" className="inline mr-2" /><span aria-hidden="true" className="font-headline text-[26px] pt-3 hidden sm:inline">Palaxy</span>
            </a>
        </nav>
    );
}
