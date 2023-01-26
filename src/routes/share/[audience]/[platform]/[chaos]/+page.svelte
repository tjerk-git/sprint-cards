<script>
	import { page } from '$app/stores';

	import Filler from '$lib/components/Filler.svelte';
	import Error from '$lib/components/Error.svelte';

	const { audience } = $page.params;
	const { platform } = $page.params;
	const { chaos } = $page.params;
	let showErrors = false;

	/**
	 * @param {string} str
	 */
	function containsOnlyNumbers(str) {
		return /^\d+$/.test(str);
	}

	if (
		!containsOnlyNumbers(audience) ||
		!containsOnlyNumbers(platform) ||
		!containsOnlyNumbers(chaos)
	) {
		showErrors = true;
	}
</script>

<div class="container">
	{#if showErrors === false}
		<Filler title="Design" />
		<PlatformShuffler selected={platform} />
		<Filler title="For" />
		<AudienceShuffler selected={audience} />
		<ChaosShuffler selected={chaos} />
	{:else}
		<Error />
	{/if}
</div>
