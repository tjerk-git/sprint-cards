<script lang="ts">
	import { fade } from 'svelte/transition';
	/**
	 * @type {Number}
	 */
	export let tokens: number;
</script>

<div class="circle">
	{#key tokens}
		<div transition:fade>{tokens}</div>
	{/key}
</div>

<style>
	.circle {
		border: 3px solid black;
		width: 64px;
		height: 64px;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		text-transform: uppercase;
		font-weight: bold;
		box-shadow: 5px 0 0 -2px #141414;
	}

	@media only screen and (max-width: 600px) {
		.circle {
			width: 25px;
			height: 25px;
			font-size: 1em;
		}
	}
</style>
