<script lang="ts">
	import { isMuted, currentSrc } from '$lib/shared/stores.js';
	import { Sound } from 'svelte-sound';
	import no_coin_mp3 from '../sounds/no-coin.mp3';
	import bloeper_mp3 from '../sounds/bloeper.mp3';

	const no_coin = new Sound(no_coin_mp3);
	const bloeper = new Sound(bloeper_mp3);

	let muted: boolean = false;
	let src: string = '';

	isMuted.subscribe((value) => {
		muted = value;
	});

	currentSrc.subscribe((value) => {
		if (value !== '') {
			src = value;
			if (src === 'no-coin.mp3') {
				no_coin.play();
			} else {
				bloeper.play();
			}
		}
	});
</script>
