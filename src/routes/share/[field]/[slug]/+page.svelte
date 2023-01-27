<script>
	import CreateButton from '$lib/components/createButton.svelte';
	import { page } from '$app/stores';
	import Filler from '$lib/components/Filler.svelte';
	import Static from '$lib/components/Static.svelte';
	import Error from '$lib/components/Error.svelte';
	import PlusButton from '$lib/components/PlusButton.svelte';

	const { slug } = $page.params;

	const slugs = slug.split('+');

	let filler = true;

	export let data;
	//@todo change this to something more reliable?
	const audiences = data.json.audiences.find(
		(/** @type {{ slug: string; }} */ item) => item.slug === slugs[0]
	);
	const platforms = data.json.platforms.find(
		(/** @type {{ slug: string; }} */ item) => item.slug === slugs[1]
	);
	const chaosModifiers = data.json.chaosModifiers.find(
		(/** @type {{ slug: string; }} */ item) => item.slug === slugs[2]
	);
</script>

<div class="share_container">
	{#if audiences && platforms}
		<Filler title="Design" {filler} />
		<Static title={platforms.title} color="green" {filler} />
		<Filler title="For" />
		<Static title={audiences.title} color="purple" />
	{:else}
		<Error />
	{/if}
	{#if chaosModifiers}
		<Static title={chaosModifiers.title} color="yellow" />
	{/if}
</div>

<footer>
	<div class="spacer" />
	<a href="/shuffle/{$page.params.field}"><CreateButton title="Create your own!" /></a>
</footer>

<style>
	a {
		text-decoration: none;
		color: white;
	}

	footer {
		padding-top: 70px;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
