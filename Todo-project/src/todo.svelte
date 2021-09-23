<!-- <script>
import { each } from "svelte/internal";
let newcontent=[];
let oldcontent=[];
let showmode=true;
let content=[{name:'The person is good',id:1},
              {name:'The person is bad',id:2}]
const handlesubmit =()=> {
    content.count++;
    content=[{name:newcontent,id: Math.floor(Math.random()*997) },...content];
    console.log(content)
}
function remove (id){
content=content.filter((person)=>person.id!=id)
};
function edit (id){
    console.log(showmode);
    showmode=!showmode;
     oldcontent=content.filter(person => person.id===id);
      console.log('da',oldcontent);
}
function update (index){
    console.log(index.name);
    content.index=index.name;
}
function close (){
    showmode=!showmode;
}
console.log('anik',content);
</script>
<main>
    
    <input type="text" placeholder="add content" bind:value={newcontent}/>
    <button on:click={handlesubmit}>add</button>
    {#if showmode}
        {#each oldcontent as index}
        <input type="text" placeholder="add content" bind:value={index.name}/>
        <button on:click={() => update(index)}>update</button>
        <button on:click={() =>  close()}>close</button>
        {/each}
    {/if}
   
    {#each content as person(person.id)}
        <p>{person.name}</p>
        <button on:click={() => remove(person.id)}>delete</button>
        <button  on:click={() => edit(person.id)}>Edit</button>
    {/each}
</main> -->