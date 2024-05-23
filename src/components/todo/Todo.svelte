<script>
    export let mode = null;

    import { toasts, showToast } from "$lib/Toast.js";
    import Toast from "../system/Toast.svelte";
    $: targetToasts = $toasts.addTodo;



    let addTodoContainer;

</script>

aaaaaaaa
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div 
    id="todo"
    class="collapse {mode==="new-todo" ? 'new-todo': 'list-todo'}"
    tabindex="0"
    bind:this={addTodoContainer}
>

    <div class="card card-body">
        <div class="row">

            <div class="col-1">aa
            </div>

            <div class="col-11">aaaaa
            </div>

        </div>
    </div>

</div>

{#each targetToasts as toast}
    <Toast {...toast} />
{/each}


<style lang="scss">

    #todo.new-todo {
        --todo-bg-color: var(--bg-light);
        --todo-color: var(--color-neutral);
    }
    #todo.list-todo {
        --todo-bg-color: var(--white);
        --todo-color: var(--color-neutral);
    }

    #todo {
        background-color: var(--todo-bg-color);
        color: var(--todo-color);
    }


</style>