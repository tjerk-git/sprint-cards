<script>
	import Tokens from './Tokens.svelte';
	import { tokens } from '../../stores.js';

	/**
	 * @type {number}
	 */
	let countValue;

	tokens.subscribe((value) => {
		countValue = value;
	});
</script>

<header>
	<nav>
		<ul>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>

	<Tokens tokens={countValue} />
</header>
