<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import ShuffleIcon from './ShuffleIcon.svelte';
	import { tokens } from '../../stores.js';

	// prop
	export let selected: number;

	function decrementToken() {
		tokens.update((n) => n - 1);
	}

	/**
	 * @type {number}
	 */
	let countValue: number;
	let selectedItem: number;

	tokens.subscribe((value) => {
		countValue = value;
	});

	const items = [
		{
			id: 1,
			title: 'Cats'
		},
		{
			id: 2,
			title: 'Someone with one arm available'
		},
		{
			id: 3,
			title: 'The oldest person you know'
		},
		{
			id: 4,
			title: 'Someone who lost their glasses'
		},
		{
			id: 5,
			title: 'Someone from 1985'
		},
		{
			id: 6,
			title: 'The youngest (non-baby) person you know'
		},
		{
			id: 7,
			title: 'People with low literacy'
		},
		{
			id: 8,
			title: 'Very busy people'
		},
		{
			id: 9,
			title: "People who can't make choices"
		},
		{
			id: 10,
			title: 'Bob (you pick the Bob)'
		},
		{
			id: 11,
			title: 'Yourself'
		},
		{
			id: 12,
			title: 'Rich people on the toilet'
		},
		{
			id: 13,
			title: 'For your best friend'
		},
		{
			id: 14,
			title: 'Families'
		},
		{
			id: 15,
			title: 'For people with low digital skills'
		}
	];

	if (selected) {
		selectedItem = selected;
	} else {
		selectedItem = Math.floor(Math.random() * items.length);
	}

	const spin = () => {
		if (countValue !== 0) {
			selectedItem = Math.floor(Math.random() * items.length);
			decrementToken();
		}
	};
</script>

<div class="shuffler">
	<Typewriter mode="scramble" cursor:false wordInterval: 1>
		{items[selectedItem].title}
	</Typewriter>

	<ShuffleIcon {spin} />
</div>

<style>
	.shuffler {
		background: #a091ff;
		border-radius: 65px;
		font-size: 2.4rem;
		text-transform: uppercase;
		padding: 1.4rem;
		font-weight: bold;
		display: flex;
		min-width: 150px;
		align-items: center;
		justify-content: center;
	}
</style>
