import Navbar from "@/components/Navbar";
import SurveyPage from "./survey/page";
import Background from "@/components/Background";

export default function HomePage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="mt-20 p-6 text-center flex flex-col items-center min-h-500">
        <h1 className="font-headline text-6xl mb-4">Palaxy</h1>
        <p className="font-body text-2xl mb-20">Welcome — find your cosmic match among the stars!</p>
        <a
          href="#survey"
          className="px-6 py-3 bg-purple-600 text-white font-headline rounded-lg shadow-lg hover:bg-purple-500 transition"
        >
          Start Survey
        </a>
        <SurveyPage />
        <Background />
      </main>
    </div>
  );
}
