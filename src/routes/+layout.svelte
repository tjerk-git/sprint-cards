<script>
	import Header from '../lib/components/Header.svelte';
	import '$lib/styles/style.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		padding: 4rem;
	}
</style>
