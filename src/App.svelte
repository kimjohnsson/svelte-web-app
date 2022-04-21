<script lang="ts">
	import Start from './views/start.svelte'
</script>

<main>
	<Start />
</main>

<style>
	:global(main) {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(h1) {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		:global(main) {
			max-width: none;
		}

		:global(h1) {
			font-size: 4em;
		}
	}
</style>
