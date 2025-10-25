'use client';

import { useState, useEffect } from 'react';
import { Button } from "../components/ui";
import { purpleButton, redButton, amberButton, limeButton, emeraldButton, cyanButton, blueButton } from '../styles';
import { questions } from '../data/survey';
import ProgressBar from '../components/ui/ProgressBar';
import type { FieldErrors } from '../types';
import type { SurveyResponse } from '../lib/schema';

interface Props {
    onSubmit: (responses: Record<string, string>) => void;
    errors: FieldErrors<SurveyResponse>;
}

const buttons = [
    redButton,
    amberButton,
    limeButton,
    emeraldButton,
    cyanButton,
    blueButton
];

export function PulseSurvey({ onSubmit, errors }: Props) {

    const [responses, setResponses] = useState<Record<string, string>>({});

    // Calculate survey progress by checking the lastest response
    const keys = Object.keys(responses);
    const progress = (keys.length / questions.length) * 100;

    const handleChange = (id: number, value: string) => setResponses(prev => ({ ...prev, [id]: value }));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(responses);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // triggers once when PulseSurvey mounts


    return (
        <section className="mx-6 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-headline font-bold md:mt-0 mb-6">Quick Palaxy Pulse</h1>
            <ProgressBar progress={progress} />
            <form
                onSubmit={(event) => { handleSubmit(event); }}
                className="z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-md backdrop-blur-sm">
                <ol role="list" className="list-decimal list-inside pl-3">
                    {questions.map(question => (
                        <li key={question.id} className="pt-3 sm:text-sm md:text-lg text-left">
                            {question.text}
                            {errors[question.id] && (
                                <p className="text-red-500 text-sm mt-1">{errors[question.id]}
                                </p>
                            )}
                            <div role="radiogroup"
                                aria-labelledby="survey options"
                                className="flex flex-col sm:flex-row gap-3 items-center sm:items-start justify-center sm:justify-start text-sm text-center sm:text-left pt-2 pb-6">
                                {question.options.map((option, index) => {
                                    const palette = buttons.slice(0, question.options.length);
                                    const buttonColor = palette[index];
                                    return (
                                        <Button
                                            key={option}
                                            data={responses[question.id] === option ? 'on' : 'off'}
                                            onClick={() => handleChange(question.id, option)}
                                            className={buttonColor}
                                            text={option}
                                        />
                                    );
                                })}
                            </div>
                        </li>
                    ))}
                </ol>
                <Button
                    type="submit"
                    className={purpleButton}
                    text="Submit"
                />
            </form>
        </section>
    );
}
