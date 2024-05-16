<script>
	import AppLayout from "../app.layout.svelte";
    import { _activeGroupName, _searchString } from "$lib/stores.js";

</script>

<AppLayout>

    <div class="body-main">

        <i class="title fa-solid fa-rectangle-list"></i>
    
        <h1>Welcome to your library project</h1>
        <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

        <p>Active TodoGroupName: {$_activeGroupName}</p>
        <p>Search String: {$_searchString}</p>

    </div>

</AppLayout>


<style>

    .body-main {
        margin-bottom: 58px;
    }

</style>
