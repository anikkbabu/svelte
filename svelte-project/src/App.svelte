<script>
// import { type } from 'os';
import Model from './model.svelte';
import Addpersonform from './addpersonform.svelte';
let people=[
	{name:'anik',beltcolor:'black',age:25,id:1},
	{name:'arun',beltcolor:'orange',age:55,id:2},
	{name:'seena',beltcolor:'brown',age:25,id:3}
]
let showMode=false;
const handleClick = (id) =>{
	console.log(id);
	people=people.filter((person)=>person.id!=id)
}
const togglemodal =()=>{
	showMode=!showMode;
}
const addperson = (e) => {
	const person=e.detail;
	people=[person,...people]
}
</script>
 
<main>
<Model message="hi any one there" {showMode} >
<Addpersonform on:addperson={addperson}/>
</Model>
<button on:click={togglemodal}>open model</button>
{#each people as person (person.id)}
<h4>{person.name}</h4>
<p>{person.age} yearold,{person.beltcolor} belt</p>
<button on:click={() => handleClick(person.id)}>Delete</button>
{:else}
<p>there is no people</p>
{/each}
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