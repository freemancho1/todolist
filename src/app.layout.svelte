<script>
    import TodoHeader from "./components/header/TodoHeader.svelte";
    import TodoFooter from "./components/footer/TodoFooter.svelte";

    import "./app.css";

    export let pageTitle = "To-do List";
</script>


<svelte:head>
    <title>{pageTitle}</title>
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