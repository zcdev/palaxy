import Navbar from "@palaxy/components/ui/Navbar";
import PalaxyPage from "@palaxy/page";
import Background from "@palaxy/components/ui/Background";

export default function HomePage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="mt-4 md:mt-20 text-center flex flex-col items-center h-full">
                <PalaxyPage />
                <Background />
            </main>
        </div>
    );
}