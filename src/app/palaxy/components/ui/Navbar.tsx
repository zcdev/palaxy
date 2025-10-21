import { LuOrbit } from "react-icons/lu";
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-[40px] text-gray-800 hover:text-purple-600 transition">
                            <LuOrbit strokeWidth={2.5} />
                        </a>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#survey" className="font-nav text-gray-800 hover:text-purple-600 transition">
                            Survey
                        </a>
                        <a href="#about" className="font-nav text-gray-800 hover:text-purple-600 transition">
                            About
                        </a>
                        <a href="#gallery" className="font-nav text-gray-800 hover:text-purple-600 transition">
                            Gallery
                        </a>
                    </div>

                    {/* Mobile Menu Button (hamburger) */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-purple-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {/* Simple hamburger icon */}
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
