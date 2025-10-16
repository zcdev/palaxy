export type ViewPhase = 'select' | 'intro' | 'forces' | 'pulse' | 'thanks';

export interface PalaxyState {
    phase: ViewPhase;
    selectedAvatarId?: string;
    surveyResponses: Record<string, string>;
}

export interface Avatar {
    id: string;
    name: string;
    tagline: string;
    intro: string;
    image: string;
    forces: string[];
    counterforce: string;
}
