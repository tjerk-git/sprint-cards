<script lang="ts">
	import { isMuted } from '$lib/shared/stores.js';

	/**
	 * @type {boolean}
	 */
	export let paused;
	/**
	 * @type {string}
	 */
	export let src;

	let muted: boolean = false;

	isMuted.subscribe((value) => {
		muted = value;
	});
</script>

<audio bind:paused src="../sounds/{src}" bind:muted />
