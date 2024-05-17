<script>
    import Timer from "$lib/header/Timer.svelte";
    import Selector from "$lib/header/Selector.svelte";
    import AddGroupArea from "$lib/header/AddGroupArea.svelte";
    import MainButtonGroup from "$lib/header/MainButtonGroup.svelte";
</script>

<nav class="navbar sticky-top app-header">

    <Timer />
    
    <div class="container row">
        
        <div class="col-9 header-cols">
            <Selector />
        </div>

        <div class="col-3 main-button-group">
            <MainButtonGroup />
        </div>

    </div>

</nav>

<AddGroupArea />

<style>

    .container {
        margin: 0px;
        padding-right: 0px;
    }

    .header-cols {
        padding: 0px;
    }

    .main-button-group {
        padding: 0px;
    }

</style>