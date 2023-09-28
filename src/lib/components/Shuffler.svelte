<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import ShuffleIcon from './ShuffleIcon.svelte';
	import { onMount } from 'svelte';

	import { Sound } from 'svelte-sound';
	import no_coin_mp3 from '$lib/sounds/no-coin.mp3';
	import bloeper_mp3 from '$lib/sounds/bloeper.mp3';
	const bloeper = new Sound(bloeper_mp3);

	import { tokens, currentAudience, currentChaos, currentPlatform } from '$lib/shared/stores.js';

	// prop
	export let color: string;
	export let items: any;
	export let filler: boolean = false;

	onMount(() => {
		updateTitles();

		tokens.subscribe((value) => {
			countValue = value;
		});
	});

	function decrementToken() {
		if (countValue !== 0) {
			tokens.update((n) => n - 1);
		}
	}

	function updateTitles() {
		if (color === 'green') {
			currentPlatform.update(() => items[selectedItem].title);
		}
		if (color === 'purple') {
			currentAudience.update(() => items[selectedItem].title);
		}
		if (color === 'yellow') {
			currentChaos.update(() => items[selectedItem].title);
		}
	}

	/**
	 * @type {number}
	 */
	let countValue: number;
	let selectedItem: number;

	let hideShuffler = false;

	$: {
		if (countValue === 0) {
			hideShuffler = true;
		} else {
			hideShuffler = false;
		}
	}

	selectedItem = Math.floor(Math.random() * items.length);

	const spin = () => {
		if (countValue !== 0) {
			// Don't want the same item twice
			if (selectedItem !== Math.floor(Math.random() * items.length)) {
				selectedItem = Math.floor(Math.random() * items.length);
			}

			updateTitles();

			bloeper.play();

			setTimeout(() => {
				decrementToken();
			}, 4341);
		}
	};
</script>

<div class="shuffler {color}">
	<Typewriter mode="scramble" cursor:false>
		{items[selectedItem].title}
	</Typewriter>

	<ShuffleIcon {spin} {hideShuffler} />
</div>

{#if filler}
	<div class="filler_container" />
{/if}

<style>
	.purple {
		background: var(--purple-color);
	}
	.green {
		background: var(--green-color);
	}
	.yellow {
		background: var(--yellow-color);
	}
	.filler_container {
		width: 100%;
	}
</style>
