<script lang="ts">
	/**
	 * @type {any}
	 */
	export let enableChaos;
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {boolean}
	 */
	export let paused: boolean;
</script>

<div class="plus--button" on:click={enableChaos}>
	<svg
		width="44px"
		height="44px"
		viewBox="0 0 44 44"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g
				id="Card"
				transform="translate(-138.000000, -908.000000)"
				fill="#000000"
				fill-rule="nonzero"
			>
				<g id="Group-3" transform="translate(96.000000, 865.000000)">
					<g id="+" transform="translate(42.011344, 43.990547)">
						<path
							d="M25.0824713,43 L18.0002807,43 L18.0002807,0 L25.0824713,0 L25.0824713,43 Z M43.082752,24.8480074 L0,24.8480074 L0,18.1519926 L43.082752,18.1519926 L43.082752,24.8480074 Z"
							id="Shape"
						/>
					</g>
				</g>
			</g>
		</g>
	</svg>
	{title}
</div>

<style>
	.plus--button {
		border-radius: 65px;
		font-size: 3.2em;
		text-transform: uppercase;
		padding: 32px 48px;
		display: flex;
		max-width: 550px;
		align-items: center;
		justify-content: center;
		background: var(--yellow-color);
		cursor: pointer;
	}
	svg {
		margin-right: 32px;
	}

	@media only screen and (max-width: 600px) {
		.plus--button {
			padding: 16px 24px;
			font-size: 1em;
		}
	}
</style>
