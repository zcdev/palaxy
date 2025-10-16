// components/Background.tsx
import Stars from "./Stars";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
            <Stars />
        </div>
    );
}
