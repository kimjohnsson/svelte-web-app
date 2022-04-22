<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import Header from './components/header/Header.svelte'
	import Start from './views/start.svelte'
	import PageNotFound from './views/PageNotFound.svelte'
	import Footer from './components/footer/Footer.svelte'

	import RmCalculator from './components/calculator/RmCalculator.svelte'
	import BmiCalculator from './components/calculator/BmiCalculator.svelte'
</script>

<Router>
	<Header />
	<Route path="/" component={Start} />
	<Route path="/one-rm-calculator" component={RmCalculator} />
	<Route path="/bmi-calculator" component={BmiCalculator} />
	<Route component={PageNotFound} />
	<Footer />
</Router>

<style>
	:global(*, *::before, *::after) {
  	box-sizing: border-box;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	:global(*::-webkit-scrollbar) {
		display: none;
	}
	
	:global(body) {
		background-color: #eaeaea;
	}
	:global(body, html, ul) {
		margin: 0;
		padding: 0;
	}

	:global(main) {
		padding: 1em;
	}

	:global(.container) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
		flex-flow: wrap;
  }

	:global(h1) {
		letter-spacing: -0.02em;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	:global(h2) {
		letter-spacing: -0.02em;
		font-size: 2.5em;
		font-weight: 100;
	}

	:global(h3) {
		letter-spacing: -0.02em;
		font-size: 1.7em;
		font-weight: 100;
	}

	:global(h4) {
		letter-spacing: -0.02em;
		font-size: 1.4em;
		font-weight: 100;
	}

	:global(p){
		font-weight: 100;
	}

	@media (min-width: 640px) {
		:global(main) {
			max-width: 1200px;
			margin: auto;
			padding: 2em;
		}

		:global(.container) {
			flex-direction: row;
		}

		:global(h1) {
			font-size: 3.5em;
		}

		:global(h4) {
			font-size: 1.4em;
		}
	}
</style>
