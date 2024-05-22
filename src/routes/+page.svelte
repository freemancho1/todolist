<script>
    import AppLayout from "../app.layout.svelte";
    import AddTodoArea from "../components/todo/AddTodoArea.svelte";
    import ShowTodos from "../components/todo/ShowTodos.svelte";
</script>


<AppLayout>

    <AddTodoArea />
    <ShowTodos />
    <div>Main app body</div>

</AppLayout>