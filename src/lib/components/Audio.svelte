<script>
	/**
	 * @type {string}
	 */
	export let src;
	/**
	 * @type {boolean}
	 */
	export let paused;
	/**
	 * @type {boolean}
	 */
	export let muted;
</script>

<audio bind:paused src="../sounds/{src}" bind:muted />
