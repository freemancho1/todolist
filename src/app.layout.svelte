<script>
    import TodoHeader from "./components/header/TodoHeader.svelte";
    import TodoFooter from "./components/footer/TodoFooter.svelte";
    import { appInfo } from "$lib/Messages.js";

    import "./app.css";
    import "./app.style.css";
</script>


<svelte:head>
    <title>{$appInfo.title}</title>
</svelte:head>


<div class="container app-body">

    <TodoHeader />

    <div class="app-main">
        <!-- To-do Main Area -->
        <slot>
            <em>No content was provided.</em>
        </slot>
    </div>

    <TodoFooter />

</div>