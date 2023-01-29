<script>
	/**
	 * @type {string}
	 */
	export let src;
	/**
	 * @type {boolean}
	 */
	export let paused;
</script>

<audio bind:paused src="../sounds/{src}" />
