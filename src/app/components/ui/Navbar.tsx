import { LuOrbit } from 'react-icons/lu';

export default function Navbar() {

    return (
        <nav className="navbar fixed top-[20px] pl-[20px] w-full z-5">
            <a href="/" aria-label="Palaxy home" className="text-[40px] hover:text-purple-400 transition flex items-center content-center">
                <LuOrbit strokeWidth={2.5} aria-hidden="true" className="inline mr-2" />
            </a>
        </nav>
    );
}
