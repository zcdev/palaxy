'use client';

import { useState } from 'react';

interface Props {
    onSubmit: (responses: Record<string, string>) => void;
}

export function PulseSurvey({ onSubmit }: Props) {
    const [responses, setResponses] = useState<Record<string, string>>({});

    const handleChange = (q: string, a: string) =>
        setResponses({ ...responses, [q]: a });

    const handleSubmit = () => onSubmit(responses);

    return (
        <div className="text-white p-8 max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold mb-4">Quick Palaxy Pulse</h2>

            {[
                'So… did the galaxy’s personality algorithm totally nail you?',
                'Would you trust your cosmic match to pilot your spaceship?',
                'How emotionally scarred are you after reading your bio?',
                'Would you recommend Palaxy to your species?',
            ].map((q, i) => (
                <div key={i} className="space-y-2">
                    <p>{q}</p>
                    {['Option A', 'Option B', 'Option C'].map((opt) => (
                        <label key={opt} className="block">
                            <input
                                type="radio"
                                name={`q${i}`}
                                value={opt}
                                onChange={() => handleChange(`q${i}`, opt)}
                                className="mr-2 accent-pink-500"
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            ))}

            <button
                onClick={handleSubmit}
                className="mt-6 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors"
            >
                Submit
            </button>
        </div>
    );
}
