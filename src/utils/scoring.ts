import { AvatarId, Response, Question } from "@/types";

const responseMultiplier: Record<Response, number> = {
    stronglyDisagree: 0,
    disagree: 0.25,
    neutral: 0.5,
    agree: 0.75,
    stronglyAgree: 1,
  };
  
export function calculateAvatarScores(
    answers: Response[],
    questions: Question[]
) {
    const totals: Record<AvatarId, number> = {
        zarnok: 0, luna7: 0, orbitz: 0, blip: 0, glimbo: 0, flarb: 0,
    };

    questions.forEach((q, i) => {
        const base = responseMultiplier[answers[i]];
        const multiplier = q.isReversed ? 1 - base : base;

        (Object.keys(q.weights) as AvatarId[]).forEach((a) => {
            totals[a] += q.weights[a] * multiplier;
        });
    });

    const maxPossible = questions.length; // each q can contribute up to 1
    const normalized = Object.fromEntries(
        Object.entries(totals).map(([a, v]) => [a, v / maxPossible])
    ) as Record<AvatarId, number>;

    return { totals, normalized };
}