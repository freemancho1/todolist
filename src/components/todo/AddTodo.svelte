<script>
    import { onMount } from "svelte";
    import Todo from "./Todo.svelte";

    export let todos;
    export let labels;
    export let icons;
    export let activeGroup;

    $: newTodo = todos.init();

    let addTodoContainer;


    onMount(() => {
        newTodo.gid = activeGroup.id;
    });
</script>

<div id="add-todo" class="collapse add-todo" bind:this={addTodoContainer}>

    <Todo todo={newTodo} {labels} {icons} />

</div>