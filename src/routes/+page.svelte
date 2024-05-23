<script>
    import AppLayout from "../app.layout.svelte";
    import AddTodo from "../components/todo/AddTodo.svelte";
    import ShowTodos from "../components/todo/ShowTodos.svelte";
</script>


<AppLayout>

    <AddTodo />
    <ShowTodos />
    <div>Main app body</div>

</AppLayout>