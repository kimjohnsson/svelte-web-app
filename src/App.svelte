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
</style>
