'use client';

import { useState } from 'react';
import { AvatarGrid } from './avatar/AvatarGrid';
import { AvatarModal } from './avatar/AvatarModal';
import { ForceMap } from './ForceMap';
import { PulseSurvey } from './PulseSurvey';
import { Transmission } from './Transmission';
import type { PalaxyState, Avatar, FieldErrors } from '../types';
import { mockAvatars } from '../data';
import { supabase } from '../lib/client';
import { surveySchema } from '../lib/schema';
import type { SurveyResponse } from '../lib/schema';
import { z } from 'zod';

interface Props {
    avatar?: Avatar;
    selectedAvatar?: Avatar;
}

export default function PalaxyPage() {

    const [state, setState] = useState<PalaxyState>({
        avatar: undefined,
        phase: 'select',
        surveyResponses: {},
        selectedAvatar: undefined,
    });

    const [errors, setErrors] = useState<FieldErrors<SurveyResponse>>({});

    const handleSelectAvatar = (avatar: Avatar) =>
        setState({ ...state, selectedAvatar: avatar, phase: 'intro' });

    const handleConfirmAvatar = () => setState({ ...state, phase: 'forces' });

    const handleReturnHome = () => setState({ ...state, phase: 'select' });

    const handleNextForces = () => setState({ ...state, phase: 'pulse' });

    const handleSurveySubmit = async (responses: Record<string, string>) => {

        // Zod parse responses for checking against survey schema
        const parsed = surveySchema.safeParse(responses);

        // Check validation errors
        if (!parsed.success) {
            const flattened = z.flattenError(parsed.error);
            setErrors(flattened.fieldErrors);
            return;
        }

        setErrors({});

        // Update local state immediately so UI feels responsive
        setState((prev) => ({
            ...prev,
            surveyResponses: responses,
            phase: 'thanks',
        }));

        try {
            // Insert survey data into Supabase
            const { error } = await supabase.from('responses').insert({
                session_id: crypto.randomUUID(), // optional unique visitor ID
                answers: responses,
                avatar_result: state.selectedAvatar ?? null,
            });

            if (error) {
                // Silent fail-safe: report to console only in dev
                if (process.env.NODE_ENV === 'development') {
                    console.error('Supabase insert error:', error);
                }
            } else if (process.env.NODE_ENV === 'development') {
                console.log('Survey saved successfully ✅');
            }
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.error('Unexpected survey submit error:', err);
            }
        }
    };

    switch (state.phase) {
        case 'select':
            return <AvatarGrid onSelect={handleSelectAvatar} />;

        case 'intro':
            return (
                <AvatarModal
                    avatar={state.selectedAvatar!}
                    onConfirm={handleConfirmAvatar}
                    onDeny={handleReturnHome}
                />
            );

        case 'forces':
            return (<ForceMap
                avatar={state.selectedAvatar!}
                onNext={handleNextForces}
                mockAvatars={mockAvatars} />
            );

        case 'pulse':
            return <PulseSurvey onSubmit={handleSurveySubmit} errors={errors} />;

        case 'thanks':
            return <Transmission responses={state.surveyResponses} onReturn={handleReturnHome} />;
    }
}

