export type AvatarId = 'zarnok' | 'blip' | 'flarb' | 'luna7' | 'glimbo' | 'orbitz';

export interface Question {
    id: number;
    text: string;
    relatedAvatars: AvatarId[];
    intent: string;
}

export interface Response {
    questionId: number;
    value: number;
}

export interface AvatarScore {
    id: AvatarId;
    score: number;
}

export interface SurveyResult {
    topMatches: AvatarScore[];
    allScores: AvatarScore[];
}