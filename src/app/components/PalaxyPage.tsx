'use client';

import { useState } from 'react';
import { AvatarGrid } from './avatar/AvatarGrid';
import { AvatarModal } from './avatar/AvatarModal';
import { ForceMap } from './ForceMap';
import { PulseSurvey } from './PulseSurvey';
import { Transmission } from './Transmission';
import type { PalaxyState, Avatar } from '../types';
import { mockAvatars } from '../data';
// import { supabase } from '../lib/client';

export default function PalaxyPage() {

    const [state, setState] = useState<PalaxyState>({
        avatar: undefined,
        phase: 'select',
        surveyResponses: {},
        selectedAvatar: undefined,
    });

    const handleSelectAvatar = (avatar: Avatar) =>
        setState({ ...state, selectedAvatar: avatar, phase: 'intro' });

    const handleConfirmAvatar = () => setState({ ...state, phase: 'forces' });

    const handleReturnHome = () => setState({ ...state, phase: 'select' });

    const handleNextForces = () => setState({ ...state, phase: 'pulse' });

    const handleSurveySubmit = async (responses: Record<string, string>) => {
        setState((prev) => ({
            ...prev,
            surveyResponses: responses,
            phase: 'thanks',
        }));

        try {
            // Insert survey data into Neon
            const response = await fetch("/api/responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sessionId: crypto.randomUUID(),
                    answers: responses,
                    avatarResult: state.selectedAvatar,
                }),
            });

            if (!response.ok) {
                // Silent fail-safe: report to console only in dev
                if (process.env.NODE_ENV === 'development') {
                    throw new Error(`HTTP error! Status: ${response.status}`);
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
            return <PulseSurvey onSubmit={handleSurveySubmit} />;

        case 'thanks':
            return <Transmission responses={state.surveyResponses} onReturn={handleReturnHome} />;
    }
}

