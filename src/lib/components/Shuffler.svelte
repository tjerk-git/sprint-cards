<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import ShuffleIcon from './ShuffleIcon.svelte';
	import { tokens } from '../../stores.js';

	// prop
	export let selected: number = 99;
	export let color: string;
	export let items: any;
	export let filler: boolean = false;

	function decrementToken() {
		tokens.update((n) => n - 1);
	}

	/**
	 * @type {number}
	 */
	let countValue: number;
	let selectedItem: number;

	tokens.subscribe((value) => {
		countValue = value;
	});

	if (selected !== 99) {
		selectedItem = selected;
	} else {
		selectedItem = Math.floor(Math.random() * items.length);
	}

	const spin = () => {
		if (countValue !== 0) {
			selectedItem = Math.floor(Math.random() * items.length);
			decrementToken();
		}
	};
</script>

<div class="shuffler {color}">
	<Typewriter mode="scramble" cursor:false wordInterval: 1>
		{items[selectedItem].title}
	</Typewriter>

	<ShuffleIcon {spin} />
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
