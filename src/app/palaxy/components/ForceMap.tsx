'use client';

interface Props {
    onNext: () => void;
}

export function ForceMap({ onNext }: Props) {
    return (
        <div className="text-center text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Forces Detected</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div>Neighboring Forces</div>
                <div>Counterforce</div>
                <div>Icy-7, Orbitz</div>
            </div>
            <button
                onClick={onNext}
                className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-xl transition-colors"
            >
                Take Survey
            </button>
        </div>
    );
}
