<script>
	import PlatformShuffler from '$lib/components/PlatformShuffler.svelte';
	import ChaosShuffler from '$lib/components/ChaosShuffler.svelte';
	import AudienceShuffler from '$lib/components/AudienceShuffler.svelte';
	import Filler from '$lib/components/Filler.svelte';
	import PlusButton from '$lib/components/PlusButton.svelte';
	import Button from '$lib/components/Button.svelte';

	let chaos = false;
	const enableChaos = () => {
		chaos = true;
	};
</script>

<div class="shuffle_container">
	<Filler title="Design" />

	<PlatformShuffler />
	<div class="filler">For</div>
	<AudienceShuffler />
	{#if chaos === true}
		<ChaosShuffler />
	{/if}
</div>

<footer>
	{#if chaos === false}
		<PlusButton chaos={enableChaos} title="Add chaos" />
	{/if}

	<Button title="Let's go!" />
</footer>

<style>
	.shuffle_container {
		min-width: 45%;
		align-items: baseline;
		align-content: stretch;
		flex-wrap: wrap;
		flex-direction: row;
		display: flex;
	}

	footer {
		position: absolute;
		bottom: 70px;
		display: flex;
		width: 90%;
		justify-content: space-between;
	}
</style>
