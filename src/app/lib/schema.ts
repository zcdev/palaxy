// lib/schema.ts
import { z } from 'zod';

export const surveySchema = z.object({
    // Zod custom error messages
    1: z.string('Please select an option.'),
    2: z.string('Please select an option.'),
    3: z.string('Please select an option.'),
    4: z.string('Please select an option.'),
    5: z.string('Please select an option.'),
});

export type SurveyResponse = z.infer<typeof surveySchema>;
