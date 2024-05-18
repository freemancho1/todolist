<script>
	import AppLayout from "../app.layout.svelte";
    import { _activeGroup, _searchString } from "$lib/stores.js";

</script>

<AppLayout>

    <div class="body-main">

        <i class="title fa-solid fa-rectangle-list"></i>
    
        <h1>Welcome to your library project</h1>
        <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

        <p>Active TodoGroupName: {$_activeGroup.title}</p>
        <p>Search String: {$_searchString}</p>

        <div class="toast-body" style="
            background-color: #0d6efd;
            color: #fff;">
            <div class="row justify-content-between">
                <div class="col-10">
                    <i class="fa-solid fa-star"></i>
                    <strong class="me-auto">Success</strong>
                </div>
                <div class="col-1">
                    <div
                        role="button"
                        class="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    >
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="message">
                The to-do list has been saved successfully.
            </div>
        </div>

    </div>

</AppLayout>


<style>
    .btn-close {
        margin-left: 1em;
        width: 1.5em; /* Adjust size as needed */
        height: 1.5em; /* Adjust size as needed */
        background: none;
        border: none;
        padding: 0;
        -webkit-appearance: none;
        appearance: none;
    }
    .btn-close .fas {
        font-size: 1.2em; /* Adjust size as needed */
        color: white; /* Change this to your desired color */
    }

    /* .btn-close {
        margin-left: 1em;
        font-size: 0.8em;
        /* Color not applied */
        /* color: #fff !important;
        --bs-btn-close-color: #fff !important; */
    /* } */
    /* div {
        border: 1px solid white;
    } */

    .body-main {
        margin-bottom: 58px;
    }

</style>
