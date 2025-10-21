// Global Types:

export type ViewPhase = 'select' | 'intro' | 'forces' | 'pulse' | 'thanks';

export interface PalaxyState {
    phase: ViewPhase;
    avatar?: Avatar;
    selectedAvatar?: Avatar;
    surveyResponses: Record<string, string>;
}

export interface ForceRelation {
    id: string;
    note: string;
}

export interface Forces {
    neighbors: ForceRelation[];
    counterforce: ForceRelation;
}

export interface Avatar {
    id: string;
    name: string;
    title: string;
    intro: string;
    bio: string;
    image: string;
    forces: Forces;
    species: string;
    homeworld: string;
    planet: string;
    synergy: string;
    psyche: string;
    wavelength: string;
}

export interface Question {
    id: string;
    text: string;
    options: string[];
}
