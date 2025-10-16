'use client';

import { useState } from 'react';
import { AvatarGrid } from './components/AvatarGrid';
import { AvatarModal } from './components/AvatarModal';
import { ForceMap } from './components/ForceMap';
import { PulseSurvey } from './components/PulseSurvey';
import { Transmission } from './components/Transmission';
import type { PalaxyState } from './types';

export default function PalaxyPage() {
  const [state, setState] = useState<PalaxyState>({
    phase: 'select',
    surveyResponses: {},
  });

  const handleSelectAvatar = (id: string) =>
    setState({ ...state, selectedAvatarId: id, phase: 'intro' });

  const handleConfirmAvatar = () => setState({ ...state, phase: 'forces' });

  const handleNextForces = () => setState({ ...state, phase: 'pulse' });

  const handleSurveySubmit = (responses: Record<string, string>) =>
    setState({ ...state, surveyResponses: responses, phase: 'thanks' });

  switch (state.phase) {
    case 'select':
      return <AvatarGrid onSelect={handleSelectAvatar} />;

    case 'intro':
      return (
        <AvatarModal
          avatarId={state.selectedAvatarId!}
          onConfirm={handleConfirmAvatar}
        />
      );

    case 'forces':
      return <ForceMap onNext={handleNextForces} />;

    case 'pulse':
      return <PulseSurvey onSubmit={handleSurveySubmit} />;

    case 'thanks':
      return <Transmission responses={state.surveyResponses} />;
  }
}
