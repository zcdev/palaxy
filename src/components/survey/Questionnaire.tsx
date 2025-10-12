'use client';
import { questions } from "@/data/survey";
import type { Question, Response } from "@/types";
import { calculateAvatarScores } from "@/utils/scoring";

export type QuestionnaireProps = {
    responses: Record<number, Response | null>;
    handleChange: (id: number, answer: Response) => void;
};

export default function Questionnaire({ responses, handleChange }: QuestionnaireProps) {

    // On hold for form submit now
    const handleSubmit = () => {
        const result = calculateAvatarScores(responses, questions);
        const topAvatar = Object.entries(result.normalized)
            .sort((a, b) => b[1] - a[1])[0][0];
        alert(topAvatar);
    };

    return (
        <form onSubmit={handleSubmit} className="z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-md backdrop-blur-sm my-10">
            {
                questions.map((question: Question) => (
                    <div key={question.id} className="pt-3">
                        <p className="text-lg text-left pt-3 px-6">
                            {question.id}. {question.text}
                        </p>
                        <div className="text-sm text-left pt-3 pb-6 pl-6">
                            <label className="mr-3 text-red-200">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value="stronglyAgree"
                                    checked={responses[question.id] === "stronglyAgree"}
                                    onChange={() => handleChange(question.id, "stronglyAgree")} /> Strongly Agree
                            </label>
                            <label className="mr-3 text-amber-200">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value="agree"
                                    checked={responses[question.id] === "agree"}
                                    onChange={() => handleChange(question.id, "agree")} /> Agree
                            </label>
                            <label className="mr-3 text-lime-200">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value="neutral"
                                    checked={responses[question.id] === "neutral"}
                                    onChange={() => handleChange(question.id, "neutral")} /> Neutral
                            </label>
                            <label className="mr-3 text-emerald-200">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value="disagree"
                                    checked={responses[question.id] === "disagree"}
                                    onChange={() => handleChange(question.id, "disagree")} /> Disagree
                            </label>
                            <label className="mr-3 text-cyan-200">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value="stronglyDisagree"
                                    checked={responses[question.id] === "stronglyDisagree"}
                                    onChange={() => handleChange(question.id, "stronglyDisagree")} /> Strongly Disagree
                            </label>
                        </div>
                    </div>
                ))
            }
            <button type="submit" className="my-10 px-6 py-3 bg-purple-600 text-white font-headline rounded-lg shadow-lg hover:bg-purple-500 transition">Submit</button>
        </form>
    );
}