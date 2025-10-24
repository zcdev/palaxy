'use client';
import Navbar from "./components/ui/Navbar";
import PalaxyPage from "./components/PalaxyPage";

export default function HomePage() {
    
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="mt-4 md:mt-20 text-center flex flex-col items-center h-full">
                <PalaxyPage />
            </main>
        </div>
    );
}