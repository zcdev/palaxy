import type { Avatar } from '@palaxy/types';

export function getAvatarById(avatars: Avatar[], id: string) {
    return avatars.find((avatar) => avatar.id === id);
}