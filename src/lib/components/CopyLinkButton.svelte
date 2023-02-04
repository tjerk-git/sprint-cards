<script lang="ts">
	/**
	 * @type {string}
	 */
	export let title: string;
	export let copyLink: any;
</script>

<button class="go--button" on:click={copyLink}>
	{title}
</button>

<style>
	.go--button {
		border-radius: 65px;
		font-size: 3.2em;
		text-transform: uppercase;
		padding: 32px 48px;
		display: flex;
		max-width: 550px;
		align-items: center;
		justify-content: center;
		background: var(--black-color);
		color: var(--bg-color);
		cursor: pointer;
	}

	@media only screen and (max-width: 600px) {
		.go--button {
			font-size: 1em;
			padding: 16px 24px;
		}
	}
</style>
