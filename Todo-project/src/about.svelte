<script>
import { content } from './store.js';
import { newcontent } from './store.js';
</script>
<main>
    {#each $content as person(person.id)}
            <p>{person.name}</p>
        {/each}
</main>