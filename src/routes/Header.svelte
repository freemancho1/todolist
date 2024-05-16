<script>
    import Timer from "$lib/header/Timer.svelte";
    import Selector from "$lib/header/Selector.svelte";
    import Search from "$lib/header/Search.svelte";
</script>

<nav class="navbar sticky-top app-header">

    <Timer />
    
    <div class="container row">
        
        <div class="col-6 header-cols">
            <Selector />
        </div>

        <div class="col-1"></div>

        <div class="col-5 header-cols">
            <Search />
        </div>

    </div>

</nav>

<style>

    .container {
        margin: 0px;
        padding-right: 0px;
    }

    .header-cols {
        padding: 0px;
    }

</style>