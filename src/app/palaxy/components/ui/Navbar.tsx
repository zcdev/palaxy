import { LuOrbit } from "react-icons/lu";
export default function Navbar() {
    return (
        <nav className="fixed top-[4%] left-[5.5%] w-full z-50">
            <a href="/" className="text-[40px] text-white/70 hover:text-purple-400 transition flex items-center content-center">
                <LuOrbit strokeWidth={2.5} className="inline mr-2" /><span className="font-headline text-[26px] pt-2">Palaxy</span>
            </a>
        </nav>
    );
}
