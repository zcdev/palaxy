'use client';

import { useState } from 'react';
import { AvatarGrid } from './components/AvatarGrid';
import { AvatarModal } from './components/AvatarModal';
import { ForceMap } from './components/ForceMap';
import { PulseSurvey } from './components/PulseSurvey';
import { Transmission } from './components/Transmission';
import type { PalaxyState, Avatar } from './types';
import { mockAvatars } from './data';

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

  const handleSelectAvatar = (avatar: Avatar) =>
    setState({ ...state, selectedAvatar: avatar, phase: 'intro' });

  const handleConfirmAvatar = () => setState({ ...state, phase: 'forces' });

  const handleDenyAvatar = () => setState({ ...state, phase: 'select' });

  const handleNextForces = () => setState({ ...state, phase: 'pulse' });

  const handleSurveySubmit = (responses: Record<string, string>) =>
    setState({ ...state, surveyResponses: responses, phase: 'thanks' });

  switch (state.phase) {
    case 'select':
      return <AvatarGrid onSelect={handleSelectAvatar} />;

    case 'intro':
      return (
        <AvatarModal
          avatar={state.selectedAvatar!}
          onConfirm={handleConfirmAvatar}
          onDeny={handleDenyAvatar}
        />
      );

    case 'forces':
      return <ForceMap avatar={state.selectedAvatar!} onNext={handleNextForces} mockAvatars={mockAvatars} />;

    case 'pulse':
      return <PulseSurvey onSubmit={handleSurveySubmit} />;

    case 'thanks':
      return <Transmission responses={state.surveyResponses} />;
  }
}
