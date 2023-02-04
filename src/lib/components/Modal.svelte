<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: any;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<!-- svelte-ignore a11y-autofocus -->

	<div class="modal--header">
		<slot name="header" />
		<slot />
		<button autofocus on:click={close}>close</button>
	</div>

	<slot name="content" />

	<slot />
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	.modal {
		width: 85%;
		overflow: auto;
		padding: 32px;
		border-radius: 0.2em;
		background: white;
		border-radius: 65px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.modal--header {
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	button {
		display: block;
		cursor: pointer;
	}

	@media only screen and (max-width: 600px) {
		.modal {
			width: 100%;
		}
	}
</style>
