'use client';

import { useState } from 'react';
import { Button } from "@palaxy/components/ui";
import { purpleButton, redButton, amberButton, limeButton, emeraldButton, cyanButton, blueButton } from '@palaxy/styles';
import { questions } from '@palaxy/data/survey';

interface Props {
    onSubmit: (responses: Record<string, string>) => void;
}

const buttons = [
    redButton,
    amberButton,
    limeButton,
    emeraldButton,
    cyanButton,
    blueButton
];

export function PulseSurvey({ onSubmit }: Props) {
    const [responses, setResponses] = useState<Record<string, string>>({});

    const handleChange = (id: string, value: string) =>
        setResponses(prev => ({ ...prev, [id]: value }));

    const handleSubmit = () => onSubmit(responses);

    return (
        <>
            <h1 className="text-3xl font-headline font-bold mb-6">Quick Palaxy Pulse</h1>
            <div className="z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-md backdrop-blur-sm mb-6">
                <ol role="list" className="list-decimal list-inside pl-3">
                    {questions.map(question => (
                        <li key={question.id} className="pt-3 sm:text-sm md:text-lg text-left">
                            {question.text}
                            <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start justify-center sm:justify-start text-sm text-center sm:text-left pt-2 pb-6">
                                {question.options.map((option, index) => {
                                    const palette = buttons.slice(0, question.options.length);
                                    const buttonColor = palette[index];
                                    return (
                                        <label key={option} className="cursor-pointer w-full sm:w-auto">
                                            <input
                                                type="radio"
                                                name={question.id}
                                                value={option}
                                                onChange={() => handleChange(question.id, option)}
                                                checked={responses[question.id] === option}
                                                className="peer hidden"
                                            />
                                            <span className={buttonColor}>{option}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </li>
                    ))}
                </ol>
                <Button
                    onClick={handleSubmit}
                    className={purpleButton}
                    text="Submit"
                />
            </div>
        </>
    );
}
