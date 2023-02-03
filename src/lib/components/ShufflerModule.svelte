<script>
	import Shuffler from '$lib/components/Shuffler.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import Filler from '$lib/components/Filler.svelte';
	import { fade } from 'svelte/transition';
	import Audio from '$lib/components//Audio.svelte';

	export let filler;
	export let data;
	export let isHidden;
	export let context;
	export let chaos;
	export let enableShuffler;
	export let paused;
</script>

{#if !isHidden}
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
		<StartButton title="Create your own!" {enableShuffler} />
	</div>
{/if}

<Audio {paused} />
