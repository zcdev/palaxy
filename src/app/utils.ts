import type { Avatar } from './types';

export function getAvatarById(avatars: Avatar[], id: string) {
    return avatars.find((avatar) => avatar.id === id);
}