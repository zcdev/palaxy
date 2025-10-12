import { AvatarId, Response, Question } from "@/types";

const responseMultiplier: Record<Response, number> = {
    stronglyDisagree: 0,
    disagree: 0.25,
    neutral: 0.5,
    agree: 0.75,
    stronglyAgree: 1,
};

export function calculateAvatarScores(
    responses: Record<number, Response | null>,
    questions: Question[]
): { totals: Record<AvatarId, number>; normalized: Record<AvatarId, number>; } {
    const totals: Record<AvatarId, number> = {
        zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 0, flarb: 0,
    };

    questions.forEach((question) => {
        const response = responses[question.id];
        if (!response) return; // skip unanswered
        const base = responseMultiplier[response];
        const multiplier = question.isReversed ? 1 - base : base;

        (Object.keys(question.weights) as AvatarId[]).forEach((avatar) => {
            totals[avatar] += question.weights[avatar] * multiplier;
        });
    });

    const maxPossible = questions.length; // each q can contribute up to 1
    const normalized = Object.fromEntries(
        Object.entries(totals).map(([avatar, value]) => [avatar, value / maxPossible])
    ) as Record<AvatarId, number>;

    return { totals, normalized };
}