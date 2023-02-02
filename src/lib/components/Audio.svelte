<script>
	import { isMuted } from '$lib/shared/stores.js';

	/**
	 * @type {boolean}
	 */
	export let paused;

	let muted = false;
	let src = 'bloep.mov';

	isMuted.subscribe((value) => {
		muted = value;
	});
</script>

<audio bind:paused src="../sounds/{src}" bind:muted />
