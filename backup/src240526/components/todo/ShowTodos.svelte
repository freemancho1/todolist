<script>
    import { _todos } from "$lib/Todo.js";
    import Todo from "./Todo.svelte";

    $: todos = $_todos.reverse();
</script>


<ul class="todo-list">
    <!-- 각 todo에 고유값을 부여 -->
    {#each todos as todo (todo.id)}
    <li>
        <Todo {todo} />
    </li>
    {/each}
</ul>


<style lang="scss">

    /* div { border: 1px solid red; } */

    .todo-list {
        list-style-type: none;
        margin: 0 -1em 0 0;
        padding: 0;
    }

</style>