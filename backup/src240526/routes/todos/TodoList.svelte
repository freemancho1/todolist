<script>
    import { send, receive } from "./transition.js";
    import { flip } from "svelte/animate";

    export let store;
    export let done;

    $: todos = $store.filter((todo) => todo.done === done);
</script>


<ul class="todos">

    {#each todos as todo (todo.id)}
        <li 
            class:done
            in:receive={{key: todo.id}} 
            out:send={{key: todo.id}}
            animate:flip
        >
            <label>
                <input 
                    type="checkbox" 
                    checked={todo.done}
                    on:change={(e) => store.mark(todo, e.currentTarget.checked)}
                />
                <span>{todo.description}</span>
                <button on:click={()=>store.remove(todo)} aria-label="Remove">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </label>
        </li>
    {/each}

</ul>


<style>

    label {
        width: 100%;
        height: 100%;
        display: flex;
    }

    span {
        flex: 1;
    }

</style>