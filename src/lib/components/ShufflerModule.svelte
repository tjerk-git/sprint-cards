<script lang="ts">
	import Shuffler from '$lib/components/Shuffler.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import Filler from '$lib/components/Filler.svelte';
	import { fade } from 'svelte/transition';
	import Audio from '$lib/components//Audio.svelte';
	import { tokens } from '$lib/shared/stores.js';
	import Tokens from './Tokens.svelte';
	import Refresh from './Refresh.svelte';

	let src = 'no-coin.mp3';

	export let filler: boolean;
	export let data: any;
	export let isHidden: boolean;
	export let context: string;
	export let chaos: boolean;
	export let enableShuffler: boolean;
	export let paused: boolean;

	/**
	 * @type {number}
	 */
	let countValue: number;

	tokens.subscribe((value) => {
		countValue = value;
	});

	const refresh = () => {
		tokens.update((n) => (n = 3));
		paused = false;
	};
</script>

{#if !isHidden}
	<div class="token--container">
		<Refresh {refresh} />
		<Tokens tokens={countValue} />
	</div>
	<Filler title="Create a" {filler} />
	<Shuffler items={data.json.platforms} color="green" {filler} />
	{#if context === 'design' || context === 'motion'}
		<Filler title="For" />
	{/if}
	<Shuffler items={data.json.audiences} color="purple" />
	{#if chaos === true}
		<div transition:fade>
			{#if context === 'audio'}
				<Filler title="For" />
			{/if}
			<Shuffler items={data.json.chaosModifiers} color="yellow" />
		</div>
	{/if}
{:else}
	<div on:click={enableShuffler}>
		<h1>Hey there stranger, this website generates random {context} challenges.</h1>
		<StartButton title="Create your own!" {enableShuffler} />
	</div>
{/if}

<Audio {paused} {src} />

<style>
	h1 {
		font-size: 3.2em;
		margin-bottom: 75px;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			font-size: 1.8em;
		}
	}

	.token--container {
		padding: 1rem;
		margin-left: auto;
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>
