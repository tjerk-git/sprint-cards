<script>
	import Shuffler from './Shuffler.svelte';
	import CreateButton from './CreateButton.svelte';
	import Filler from './Filler.svelte';
	import { fade } from 'svelte/transition';
	import Audio from './Audio.svelte';

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
		<CreateButton title="Create your own!" {enableShuffler} />
	</div>
{/if}

<Audio {paused} />
