<script>
	import Shuffler from '$lib/components/Shuffler.svelte';
	import Filler from '$lib/components/Filler.svelte';
	import PlusButton from '$lib/components/PlusButton.svelte';
	import Button from '$lib/components/Button.svelte';
	import { fade } from 'svelte/transition';
	import Modal from '$lib/components/Modal.svelte';
	import { page } from '$app/stores';

	export let data;

	console.log(data.json);
	//import platformItems from '$lib/data/design/platform.json';
	// import contexts from '$lib/data/contexts.json';
	// import audiences from '$lib/data/audiences.json';

	let showModal = false;
	let chaos = false;

	const enableChaos = () => {
		chaos = true;
	};

	const share = () => {
		showModal = true;
		// challenges = [
		// 	{ title: tasks[tasksNum].title },
		// 	{ title: contexts[contextsNum].title },
		// 	{ title: audiences[audiencesNum].title }
		// ];
	};
</script>

<div class="shuffle_container">
	<Filler title="Design" />
	<Shuffler items={data.json.platforms} color="green" />
	<div class="filler">For</div>
	<Shuffler items={data.json.audiences} color="purple" />
	{#if chaos === true}
		<div transition:fade>
			<Shuffler items={data.json.audiences} color="yellow" />
		</div>
	{/if}
</div>

{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<h2 slot="header">Well well it looks like iam going to...</h2>
		<div slot="content">
			<!-- something here -->
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
