<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import ShuffleIcon from './ShuffleIcon.svelte';
	import { tokens, currentAudience, currentChaos, currentPlatform } from '$lib/shared/stores.js';
	import { onMount } from 'svelte';

	// prop
	export let color: string;
	export let items: any;
	export let filler: boolean = false;

	onMount(() => {
		updateTitles();
	});

	function decrementToken() {
		tokens.update((n) => n - 1);
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
		}
	}

	tokens.subscribe((value) => {
		countValue = value;
	});

	selectedItem = Math.floor(Math.random() * items.length);

	const spin = () => {
		if (countValue !== 0) {
			selectedItem = Math.floor(Math.random() * items.length);
			decrementToken();
			updateTitles();
		}
	};

	// onMount(() => {
	// 	updateTitles();
	// });
</script>

<div class="shuffler {color}">
	<Typewriter mode="scramble" cursor:false wordInterval: 1>
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
