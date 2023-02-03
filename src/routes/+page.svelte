<script>
	import StartButton from '$lib/components/StartButton.svelte';
</script>

<div class="shuffle_container">
	<h1>Hey there stranger, this website generates random creative challenges</h1>
	<a href="/shuffle/design"><StartButton title="Create your own!" /></a>
</div>

<style>
	h1 {
		font-size: 4em;
		margin-bottom: 75px;
	}
	a {
		text-decoration: none;
		color: white;
	}
</style>
