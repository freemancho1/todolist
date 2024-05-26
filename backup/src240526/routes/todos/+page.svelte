<script>
    import { todos } from "./todos.js";
    import TodoList from "./TodoList.svelte";
    import { onMount } from "svelte";

    const handleKeydown = (event) => {
        if (event.key !== "Enter") return;
        todos.add(event.target.value);
        event.target.value = "";
    };

    onMount(() => {
        console.log(todos);
    });
</script>


<div class="board">

    <input placeholder="To-do.." on:keydown={(e) => handleKeydown(e)} />

    <div class="todo">
        <h2>Todo</h2>
        <TodoList store={todos} done={false} />
    </div>

    <div class="done">
        <h2>Done</h2>
        <TodoList store={todos} done={true} />
    </div>

</div>


<style lang="scss">

    .board {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
        max-width: 36em;
        margin: 0 auto;
    }

    .board > input {
        font-size: 1.4em;
        grid-column: 1/3;
        padding: 0.5em;
        margin: 0 0 1rem 0;
    }

    h2 {
        font-size: 2em;
        font-weight: 200;
    }

</style>