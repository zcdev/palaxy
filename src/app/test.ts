import { Response } from "@/types";
import { calculateAvatarScores } from "@/utils/scoring";
import { questions } from "@/data/survey";

// pick first 3 questions for test
const sample = questions.slice(0, 3);

// mock user responses
const answers: Response[] = [
    "agree",            // Q1
    "stronglyAgree",    // Q2
    "neutral",          // Q3
] as const;

const result = calculateAvatarScores(answers, sample);

console.log("Totals:", result.totals);
console.log("Normalized:", result.normalized);
