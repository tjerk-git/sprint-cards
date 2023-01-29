<script>
	import { isMuted } from '$lib/shared/stores.js';
	let muted = false;

	// subscribe to the store
	isMuted.subscribe((value) => {
		muted = value;
	});

	const toggle = () => {
		muted = !muted;
		isMuted.update((n) => (n = muted));
	};
</script>

<button on:click={toggle}>
	{#if muted}
		unMute
	{:else}
		Mute
	{/if}
</button>
