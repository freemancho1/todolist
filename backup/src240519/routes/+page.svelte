<script>
	import AppLayout from "../app.layout.svelte";
    import { _activeGroup, _searchString } from "$lib/stores.js";
    import ShowTodoList from "$lib/todo/ShowTodoList.svelte";
</script>

<AppLayout>

    <div class="body-main">

        <ShowTodoList />

    </div>

</AppLayout>


<style>

    .body-main {
        margin-bottom: 58px;
    }

</style>
