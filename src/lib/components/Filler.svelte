<script lang="ts">
	/**
	 * @type {string}
	 */
	export let title: string;
	/**
	 * @type {boolean}
	 */
	export let filler: boolean = false;
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
