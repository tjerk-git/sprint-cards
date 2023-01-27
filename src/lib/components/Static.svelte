<script lang="ts">
	export let title: string;
	export let color: string;
	export let filler: boolean = false;
</script>

<div class="shuffler {color}">
	{title}
</div>

{#if filler}
	<div class="filler_container" />
{/if}

<style>
	.purple {
		background: var(--purple-color);
	}
	.green {
		background: var(--green-color);
	}
	.yellow {
		background: var(--yellow-color);
	}
	.filler_container {
		width: 100%;
	}
</style>
