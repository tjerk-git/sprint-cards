<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { tokens } from '../../stores.js';
	import ShuffleIcon from './ShuffleIcon.svelte';

	function decrementToken() {
		tokens.update((n) => n - 1);
	}

	/**
	 * @type {number}
	 */
	let countValue: number;
	export let selected: number;
	let selectedItem: number;

	tokens.subscribe((value) => {
		countValue = value;
	});

	const items = [
		{
			id: 1,
			title: 'In black & white'
		},
		{
			id: 2,
			title: 'Using nothing but typography & lines'
		},
		{
			id: 3,
			title: 'Incorporating physical materials'
		},
		{
			id: 4,
			title: 'Without using rectangles'
		},
		{
			id: 5,
			title: 'Without using a professional design tool'
		},
		{
			id: 6,
			title: 'Without using words'
		},
		{
			id: 7,
			title: 'Designed for use in a pitch black environment'
		},
		{
			id: 8,
			title: 'Only using blue'
		},
		{
			id: 9,
			title: 'Incorporating some kind of animal in the design'
		},
		{
			id: 10,
			title: 'Using the Swiss Style of design'
		},
		{
			id: 11,
			title: 'In the style of De Stijl'
		},
		{
			id: 12,
			title: "That doesn't use clicking as an interaction"
		},
		{
			id: 13,
			title: 'With extreme minimalism'
		},
		{
			id: 14,
			title: 'More cowbell'
		},
		{
			id: 15,
			title: 'Using Skeumorphism '
		},
		{
			id: 16,
			title: 'Using some form of 3D'
		},
		{
			id: 17,
			title: 'With an extreme happy vibe'
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
		background: #e2c15b;
		border-radius: 65px;
		display: inline-block;
		font-size: 2.4rem;
		text-transform: uppercase;
		padding: 1.4rem;
		font-weight: bold;
	}
</style>
