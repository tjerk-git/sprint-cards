<script>
	/**
	 * @type {string}
	 */
	export let title;
</script>

<button class="go--button">
	{title}
</button>

<style>
	.go--button {
		border-radius: 65px;
		font-size: 4em;
		text-transform: uppercase;
		padding: 32px 48px;
		font-weight: bold;
		display: flex;
		max-width: 550px;
		align-items: center;
		justify-content: center;
		background: var(--black-color);
		color: var(--bg-color);
		cursor: pointer;
	}
</style>
