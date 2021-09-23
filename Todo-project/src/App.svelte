<script>
import About from './about.svelte';
import Home from './home.svelte';
// import Todo from "./todo.svelte";	
import { Router, Link, Route } from "svelte-routing";
import { component_subscribe } from "svelte/internal";
export let url="";
</script>
<Router url="{url}">
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="about">About</Link>
	</nav>
	<div>
	  <Route path="/" component="{Home}"></Route>
	  <Route path="about" component="{About}"/>
	</div>
  </Router>
<main>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>