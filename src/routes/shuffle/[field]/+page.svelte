<script>
	import { currentPlatform, currentAudience, currentChaos } from './../../../stores.js';
	import Shuffler from '$lib/components/Shuffler.svelte';
	import Filler from '$lib/components/Filler.svelte';
	import PlusButton from '$lib/components/PlusButton.svelte';
	import Button from '$lib/components/Button.svelte';
	import { fade } from 'svelte/transition';
	import Modal from '$lib/components/Modal.svelte';
	import Static from '$lib/components/Static.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { page } from '$app/stores';
	import slugify from 'slugify';

	/**
	 * @type {{ json: { platforms: any; audiences: any; chaosModifiers: any; }; }}
	 */
	export let data;

	let showModal = false;
	let chaos = false;
	let filler = true;

	const enableChaos = () => {
		chaos = true;
	};

	const share = () => {
		showModal = true;
	};

	function copyToClipboard(text) {
		window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
	}

	const copyLink = () => {
		let audienceSlug = '';
		let platformSlug = '';
		let chaosSlug = '';

		if ($currentAudience) {
			audienceSlug = slugify($currentAudience);
		}

		if ($currentPlatform) {
			platformSlug = slugify($currentPlatform);
		}

		if ($currentChaos) {
			chaosSlug = slugify($currentChaos);
		}

		let link = `${$page.url.origin}/share/${$page.params.field}/${audienceSlug}+${platformSlug}+${chaosSlug}`;

		copyToClipboard(link);
	};
</script>

<div class="shuffle_container">
	<Filler title="Design" />
	<Shuffler items={data.json.platforms} color="green" {filler} />
	<Filler title="For" />
	<Shuffler items={data.json.audiences} color="purple" />
	{#if chaos === true}
		<div transition:fade>
			<Shuffler items={data.json.chaosModifiers} color="yellow" />
		</div>
	{/if}
</div>

{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<h2 slot="header">Well well it looks like iam going to...</h2>
		<div slot="content">
			<div class="share_container">
				<Filler title="Design" />
				<Static title={$currentPlatform} color="green" {filler} />
				<Filler title="For" />
				<Static title={$currentAudience} color="purple" />
				{#if chaos}
					<Static title={$currentChaos} color="yellow" />
				{/if}
			</div>

			<div class="button_container">
				<CopyLinkButton title="Copy link" {copyLink} />
			</div>
		</div>
	</Modal>
{/if}

<footer>
	{#if chaos === false}
		<PlusButton chaos={enableChaos} title="Add chaos" opacity={1} />
	{:else}
		<PlusButton chaos={enableChaos} title="Add chaos" opacity={0} />
	{/if}

	<Button title="Let's go!" {share} />
</footer>

<style>
	.shuffle_container {
		min-width: 45%;
		align-items: baseline;
		align-content: stretch;
		flex-wrap: wrap;
		flex-direction: row;
		display: flex;
	}

	footer {
		position: absolute;
		bottom: 35px;
		display: flex;
		width: 90%;
		justify-content: space-between;
	}
</style>
