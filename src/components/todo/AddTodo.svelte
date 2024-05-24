<script>
    import { _newTodo } from "$lib/Todo.js";
    import Todo from "./Todo.svelte";

    import { toasts, showToast } from "$lib/Toast.js";
    import Toast from "../system/Toast.svelte";
    $: targetToasts = $toasts.addTodo;

</script>


<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="add-todo" class="collapse">

    <Todo mode="new-todo" todo={$_newTodo}/>

</div>


{#each targetToasts as toast}
    <Toast {...toast} />
{/each}
