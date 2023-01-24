<script>
	import PlatformShuffler from '$lib/components/PlatformShuffler.svelte';
	import ChaosShuffler from '$lib/components/ChaosShuffler.svelte';
	import AudienceShuffler from '$lib/components/AudienceShuffler.svelte';
	import Filler from '$lib/components/Filler.svelte';
</script>

<div class="container">
	<Filler title="Design" />
	<PlatformShuffler selected={1} />
	<Filler title="For" />
	<AudienceShuffler selected={2} />
	<ChaosShuffler selected={3} />
</div>

<style>
</style>
