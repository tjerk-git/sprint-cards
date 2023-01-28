import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const challenge = [{ title: "something", url: "cool"}];

const challenges = writable(challenge);

challenges.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('challenges', value);
    }
});

export default challenges;