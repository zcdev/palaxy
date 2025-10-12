"use client";
import { useState } from "react";
import type { Response } from "@/types";
import Questionnaire from "@/components/survey/Questionnaire";
import ProgressBar from "@/components/survey/ProgressBar";

export default function SurveyPage() {

    const [responses, setResponses] = useState<Record<number, Response | null>>({});

    // Calculate survey progress by checking the lastest response
    const keys = Object.keys(responses);
    const lastKey = keys[keys.length - 1];
    const progress = (Number(lastKey) / 20) * 100;

    const handleChange = (id: number, answer: Response) => {
        setResponses(prev => ({ ...prev, [id]: answer }));

    };
    return (

        <section id="survey" className="mt-80 pt-20">
            <div className="sticky top-16 z-10  mb-8">
                <h2 className="survey-bar text-2xl font-headline bg-gradient-to-b from-indigo-950 via-purple-900 to-black py-4">Take the Survey</h2>
                <ProgressBar progress={progress} />
            </div>
            <Questionnaire responses={responses} handleChange={handleChange} />
        </section>
    );
}
