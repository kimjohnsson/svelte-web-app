<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import Start from './views/start.svelte'
	import PageNotFound from './views/PageNotFound.svelte'
	import Header from './components/header/Header.svelte'

	const title = 'test'
</script>

<Router>
	<Header />
	<Route path="/" location={title} component={Start} />
	<Route component={PageNotFound} />
</Router>

<style>
	:global(*, *::before, *::after) {
  	box-sizing: border-box;
	}
	
	:global(body, html, ul) {
		margin: 0;
		padding: 0;
	}

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
