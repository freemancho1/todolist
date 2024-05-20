<script>
    import Search from "./Search.svelte";
</script>


<div class="navbar fixed-bottom app-footer justify-content-center">

    <div class="row justify-content-center">
        <div class="col-8">
            <Search />
        </div>
    </div>

</div>


<style>

    .app-footer {
        max-width: 426px;
        margin: 0 auto !important;
        background-color: var(--bg-light);
        border-top: 1px solid var(--bg-dark);
    }

</style>