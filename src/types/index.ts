export type AvatarId = 'zarnok' | 'luna7' | 'orbitz' | 'blip' | 'glimbo' | 'flarb';

export type Response = 'stronglyDisagree' | 'disagree' | 'neutral' | 'agree' | 'stronglyAgree';

export interface Question {
    text: string;
    weights: Record<AvatarId, number>; // 0–1
    isReversed?: boolean;              // negative phrasing?
}