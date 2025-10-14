'use client';
import { useState } from "react";
import { questions } from "@/data/survey";
import type { Question, Response } from "@/types";
import { calculateAvatarScores } from "@/utils/scoring";

export type QuestionnaireProps = {
    responses: Record<number, Response | null>;
    handleChange: (id: number, answer: Response) => void;
};

export default function Questionnaire({ responses, handleChange }: QuestionnaireProps) {

    const [answer, setAnswer] = useState("");

    // On hold for form submit now
    const handleSubmit = () => {
        const result = calculateAvatarScores(responses, questions);
        const topAvatar = Object.entries(result.normalized)
            .sort((a, b) => b[1] - a[1])[0][0];
        alert(topAvatar);
    };

    return (
        <form onSubmit={handleSubmit} className="z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-md backdrop-blur-sm my-10">
            <ol role="list" className="list-decimal list-inside pl-3">
                {
                    questions.map((question: Question) => (
                        <li key={question.id} className="pt-3 sm:text-sm md:text-lg text-left">
                            {question.text}
                            <div className="flex flex-col sm:flex-row gap-3
                                            items-center sm:items-start
                                            justify-center sm:justify-start
                                            text-sm text-center sm:text-left
                                            pt-2 pb-6">
                                <label className="cursor-pointer w-full sm:w-auto">
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value="stronglyAgree"
                                        checked={responses[question.id] === "stronglyAgree"}
                                        onChange={() => handleChange(question.id, "stronglyAgree")}
                                        className="peer hidden" />
                                    <span className="inline-block w-full sm:w-auto text-center px-4 py-2 rounded-full border border-red-200 
                                        text-red-200 bg-transparent
                                        peer-checked:border-red-300 peer-checked:text-red-300 
                                        peer-checked:bg-white/10 
                                        hover:bg-white/10 hover:text-red-300 hover:border-red-300
                                        transition-all duration-200">Strongly Agree</span>
                                </label>
                                <label className="cursor-pointer w-full sm:w-auto">
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value="agree"
                                        checked={responses[question.id] === "agree"}
                                        onChange={() => handleChange(question.id, "agree")}
                                        className="peer hidden" />
                                    <span className="inline-block w-full sm:w-auto text-center px-4 py-2 rounded-full border border-amber-200 
                                        text-amber-200
                                        peer-checked:border-amber-300 peer-checked:text-amber-300 
                                        peer-checked:bg-white/10 
                                        hover:bg-white/10 hover:text-amber-300 hover:border-amber-300
                                        transition-all duration-200">Agree</span>
                                </label>
                                <label className="cursor-pointer w-full sm:w-auto">
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value="neutral"
                                        checked={responses[question.id] === "neutral"}
                                        onChange={() => handleChange(question.id, "neutral")}
                                        className="peer hidden" />
                                    <span className="inline-block w-full sm:w-auto text-center px-4 py-2 rounded-full border border-lime-200 
                                        text-lime-200
                                        peer-checked:border-lime-300 peer-checked:text-lime-300 
                                        peer-checked:bg-white/10 
                                        hover:bg-white/10 hover:text-lime-300 hover:border-lime-300
                                        transition-all duration-200">Neutral</span>
                                </label>
                                <label className="cursor-pointer w-full sm:w-auto">
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value="disagree"
                                        checked={responses[question.id] === "disagree"}
                                        onChange={() => handleChange(question.id, "disagree")}
                                        className="peer hidden" />
                                    <span className="inline-block w-full sm:w-auto text-center px-4 py-2 rounded-full border border-emerald-200 
                                        text-emerald-200
                                        peer-checked:border-emerald-300 peer-checked:text-emerald-300 
                                        peer-checked:bg-white/10 
                                        hover:bg-white/10 hover:text-emerald-300 hover:border-emerald-300
                                        transition-all duration-200">Disagree</span>
                                </label>
                                <label className="cursor-pointer w-full sm:w-auto">
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value="stronglyDisagree"
                                        checked={responses[question.id] === "stronglyDisagree"}
                                        onChange={() => handleChange(question.id, "stronglyDisagree")}
                                        className="peer hidden" />
                                    <span className="inline-block w-full sm:w-auto text-center px-4 py-2 rounded-full border border-cyan-200 
                                        text-cyan-200
                                        peer-checked:border-cyan-300 peer-checked:text-cyan-300 
                                        peer-checked:bg-white/10 
                                        hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-300
                                        transition-all duration-200">Strongly Disagree</span>
                                </label>
                            </div>
                        </li>
                    ))
                }
            </ol>
            <button type="submit" className="my-10 px-6 py-3 bg-purple-600 text-white font-headline rounded-lg shadow-lg hover:bg-purple-500 transition">Submit</button>
        </form>
    );
}