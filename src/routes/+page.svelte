<script>
	import PlatformShuffler from '$lib/components/PlatformShuffler.svelte';
	import ChaosShuffler from '$lib/components/ChaosShuffler.svelte';
	import AudienceShuffler from '$lib/components/AudienceShuffler.svelte';
	import Filler from '$lib/components/Filler.svelte';
	let chaos = false;

	const enableChaos = () => {
		chaos = true;
	};
</script>

<div class="container">
	<Filler title="Design" />
	<PlatformShuffler />
	<Filler title="For" />
	<AudienceShuffler />
	{#if chaos === true}
		<ChaosShuffler />
	{/if}
</div>

{#if chaos === false}
	<button on:click={enableChaos}>Enable chaos</button>
{/if}

<style>
	.container {
		width: 90%;
		align-items: baseline;
		align-content: stretch;
		flex-wrap: wrap;
		flex-direction: row;
	}
</style>
