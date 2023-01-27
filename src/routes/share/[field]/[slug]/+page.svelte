<script>
	import { page } from '$app/stores';
	import slugify from 'slugify';
	import Filler from '$lib/components/Filler.svelte';
	import Static from '$lib/components/Static.svelte';
	import Error from '$lib/components/Error.svelte';

	const { slug } = $page.params;

	const slugs = slug.split('+');

	let filler = true;

	export let data;

	const audiences = data.json.audiences.find((item) => item.slug === slugs[0]);
	const platforms = data.json.platforms.find((item) => item.slug === slugs[1]);

	const chaosModifiers = data.json.chaosModifiers.find((item) => item.slug === slugs[2]);
</script>

<div class="share_container">
	<!-- {#each data.json.chaosModifiers as platform}
		<li>"slug": "{slugify(platform.title)}",</li>
	{/each} -->

	{#if audiences && platforms}
		<Filler title="Design" />
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
