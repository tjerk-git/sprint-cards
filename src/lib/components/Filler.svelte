<script>
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {boolean}
	 */
	export let filler = false;
</script>

<div class="filler">{title}</div>

{#if filler}
	<div class="filler_container" />
{/if}

<style>
	.filler_container {
		width: 100%;
	}
</style>
