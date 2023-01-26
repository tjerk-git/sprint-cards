<script lang="ts">
	import ShuffleIcon from './ShuffleIcon.svelte';
	import Typewriter from 'svelte-typewriter';
	import { tokens } from '../../stores.js';

	function decrementToken() {
		tokens.update((n) => n - 1);
	}
	// prop
	export let selected: number;
	export let color: string;

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
			title: 'A smartwatch app'
		},
		{
			id: 2,
			title: 'A mobile banking app'
		},
		{
			id: 3,
			title: 'An online shopping platform'
		},
		{
			id: 4,
			title: 'A music streaming service'
		},
		{
			id: 5,
			title: 'A movie streaming service'
		},
		{
			id: 6,
			title: 'A photo app'
		},
		{
			id: 7,
			title: 'A todo app'
		},
		{
			id: 8,
			title: 'A digital music instrument'
		},
		{
			id: 9,
			title: 'A map app'
		},
		{
			id: 10,
			title: 'A job marketplace'
		},
		{
			id: 11,
			title: 'A messaging app'
		},
		{
			id: 12,
			title: 'A weather app'
		},
		{
			id: 13,
			title: 'A language learning app'
		},
		{
			id: 14,
			title: 'A photo sharing app'
		},
		{
			id: 15,
			title: 'An ebook reader interface'
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

<div class="shuffler {color}">
	<Typewriter mode="scramble" cursor:0 wordInterval: 1>
		{items[selectedItem].title}
	</Typewriter>

	<ShuffleIcon {spin} />
</div>

<style>
	.filler_container {
		width: 100%;
	}
</style>
