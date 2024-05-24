<script>
    import TodoHeader from "./components/header/TodoHeader.svelte";
    import TodoFooter from "./components/footer/TodoFooter.svelte";
    import { appInfo } from "$lib/Messages.js";

    import "./app.css";
    import "./app.style.css";

    const hiddenAddTodo = () => {
        const todoContainer = document.getElementById("add-todo");
        if (todoContainer.contains(document.activeElement)) return;
        todoContainer.classList.remove("show");
    }
</script>


<svelte:head>
    <title>{$appInfo.title}</title>
</svelte:head>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container app-body" on:click={hiddenAddTodo}>

    <TodoHeader />

    <div class="app-main">
        <!-- To-do Main Area -->
        <slot>
            <em>No content was provided.</em>
        </slot>
    </div>

    <TodoFooter />

</div>


<style>
    .app-body {
        height: 100vh;
    }
</style>