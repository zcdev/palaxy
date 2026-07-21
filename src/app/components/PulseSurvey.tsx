'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "../components/ui";
import { purpleButton, red, amber, lime, emerald, cyan } from '../styles';
import { questions } from '../data/survey';
import ProgressBar from '../components/ui/ProgressBar';
import type { FieldErrors } from '../types';
import type { SurveyResponse } from '../lib/schema';
import { surveySchema } from '../lib/schema';
import { z } from 'zod';

interface Props {
    onSubmit: (responses: Record<string, string>) => void;
}

const colors = [
    red,
    amber,
    lime,
    emerald,
    cyan
];

export function PulseSurvey({ onSubmit }: Props) {
    const [responses, setResponses] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<FieldErrors<SurveyResponse>>({});
    const errorRef = useRef<Record<number, HTMLParagraphElement | null>>({});

    // Calculate survey progress by checking the lastest response
    const keys = Object.keys(responses);
    const progress = (keys.length / questions.length) * 100;

    const handleChange = (id: number, value: string) => setResponses(prev => ({ ...prev, [id]: value }));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Zod parse responses for checking against survey schema
        const parsed = surveySchema.safeParse(responses);

        // Check validation errors
        if (!parsed.success) {
            const flattened = z.flattenError(parsed.error);
            setErrors(flattened.fieldErrors);
            return;
        }

        onSubmit(responses);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // triggers once when PulseSurvey mounts

    useEffect(() => {

        const firstErrorKey = Object.keys(errors)[0];

        if (!firstErrorKey) return;

        // Reset focus on the first invalid question
        errorRef.current[Number(firstErrorKey)]?.focus();

    }, [errors]);


    return (
        <section className="relative z-4 mx-6 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-headline tracking-wider md:mt-0 mb-6">Quick Palaxy Pulse</h1>
            <ProgressBar progress={progress} />
            <form
                onSubmit={handleSubmit}
                className="progress-bar z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-md backdrop-blur-sm">
                {questions.map(question => {
                    return (
                        <fieldset key={question.id}
                            className={`text-md text-left sm:text-left pt-2 pb-6 mb-6 ${colors[question.id - 1]}`}>
                            <legend>{question.text}</legend>
                            {errors[question.id as keyof typeof errors] && (
                                <p id={`error-${question.id}`} ref={el => {
                                    errorRef.current[question.id] = el;
                                }}
                                    tabIndex={-1}
                                    aria-invalid={!!errors[question.id]}
                                    aria-describedby={`error-${question.id}`} className="text-red-500 text-sm mt-1" role="alert">{errors[question.id as keyof typeof errors]}
                                </p>
                            )}
                            {question.options.map(option => {
                                const inputId = `question-${question.id}-${option}`;
                                return (
                                    <label key={option} htmlFor={inputId} className="block ml-2">
                                        <input type="radio" id={inputId} name={inputId} value={option} onChange={() => handleChange(question.id, option)}
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                );
                            })}
                        </fieldset>
                    );
                })}
                <Button
                    type="submit"
                    className={purpleButton}
                    text="Submit"
                />
            </form>
        </section>
    );
}
