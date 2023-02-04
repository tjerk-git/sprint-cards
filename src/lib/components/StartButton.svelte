<script lang="ts">
	/**
	 * @type {String | Number | null | undefined}
	 */
	export let title = '';
	/**
	 * @type {String | Number | null | undefined}
	 */
	export let opacity: number = 1;

	export let enableShuffler: boolean;
</script>

<div class="plus--button" style:opacity>
	<svg
		width="44px"
		height="44px"
		viewBox="0 0 44 44"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g id="Card" transform="translate(-138.000000, -908.000000)" fill="#FFF" fill-rule="nonzero">
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
		font-size: 2.5em;
		text-transform: uppercase;
		padding: 32px 48px;
		display: flex;
		max-width: 550px;
		align-items: center;
		justify-content: center;
		background: var(--black-color);
		cursor: pointer;
		color: white;
	}
	svg {
		margin-right: 32px;
	}
</style>
