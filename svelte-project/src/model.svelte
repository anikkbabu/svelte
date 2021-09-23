<script>
export let message;
let ispromo=true;
export let showMode;
</script>
<main>
    {#if showMode}
<div class="modelclass" class:promo={ispromo} on:click self>
    <div class="model">
    <p>{message}</p>
    <slot></slot>
    </div>
</div>
{/if}
</main>
<style>
.promo .model p {
    background-color: red;
    padding: 20px;
}
</style>