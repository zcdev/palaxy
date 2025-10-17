import Navbar from "./palaxy/components/Navbar";
import PalaxyPage from "./palaxy/page";
import Background from "./palaxy/components/Background";

export default function HomePage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="mt-20 p-6 text-center flex flex-col items-center">
                <PalaxyPage />
                <Background />
            </main>
        </div>
    );
}