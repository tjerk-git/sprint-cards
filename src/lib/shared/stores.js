import { writable } from 'svelte/store';


export const tokens = writable(3);
export const currentPlatform = writable("");
export const currentAudience = writable("");
export const currentChaos = writable("");
export const isMuted = writable(false);
export const currentSrc = writable("");