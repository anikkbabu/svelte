<script>
import { bind, select_options } from "svelte/internal";
	import {createEventDispatcher} from "svelte";
let dispatch=createEventDispatcher();
let name;
let beltcolor;
let age;
// let Fighting=false;
// let Sleeping=false;
// let Runing=false; 
let Skill=[];
const handleChange = () =>{
    console.log(name,beltcolor,age,Skill)
}
const handlesubmit = () =>{
	const person={
		name,
		beltcolor,
		age,
		Skill,
		id:Math.random()
	};
	dispatch('addperson', person);
}
</script>
<h3>add new person</h3>
	<form on:submit|preventDefault={handlesubmit}>
		<input type="text" placeholder="name" bind:value={name}/>
        <input type="text" placeholder="belt color" bind:value={beltcolor}/>
		<input type="number" placeholder="age" bind:value={age}/>
		<label>Skills</label>
		<!-- <input type="checkbox" bind:checked={fight}>Fighting<br>
		<input type="checkbox" bind:checked={sleep}>Sleeping<br>
		<input type="checkbox" bind:checked={runing}>Runing<br> -->
		<input type="checkbox" bind:group={Skill} value='Fighting'>Fighting<br>
		<input type="checkbox" bind:group={Skill} value='Sleeping'>Sleeping<br>
		<input type="checkbox" bind:group={Skill} value='Runing'>Runing<br>
		<button>add person</button>
		<label>belt color</label>
		<select bind:value={beltcolor}>
			<option value='black'>black</option>
			<option value='orange'>orange</option>
		</select>
	</form>