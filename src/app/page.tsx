import Navbar from "./palaxy/components/Navbar";
import PalaxyPage from "./palaxy/page";
import Background from "./palaxy/components/Background";

export default function HomePage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="mt-20 p-6 text-center flex flex-col items-center min-h-500">
                <h1 className="font-headline text-6xl mb-4">Palaxy</h1>
                <p className="font-body text-2xl mb-10">Welcome — find your cosmic match among the stars!</p>
                    <h2 className="font-headline mb-10 text-center text-3xl text-white">
                        Meet the pals
                    </h2>
                <PalaxyPage />
                <Background />
            </main>
        </div>
    );
}