<script>
	import AddGroupArea from './AddGroupArea.svelte';
    import Timer from "./Timer.svelte";
    import GroupMenu from "./GroupMenu.svelte";
    import MainButtonGroup from "./MainButtonGroup.svelte";
</script>


<nav class="navbar sticky-top app-header">

    <Timer />

    <div class="container row">

        <div class="col-9 header-cols">
            <GroupMenu />
        </div>

        <div class="col-3">
            <MainButtonGroup />
        </div>

    </div>

</nav>

<AddGroupArea />


<style lang="scss">
    
    // div {
    //     border: 1px solid red;
    // }

    .app-header {
        background-color: var(--white);
        border-bottom: 1px solid var(--border-dark);
    }

    .container {
        margin: 0px;
        // padding-right: 0px;
        padding: 0.3em 0px 0.3em 0.7em;
    }

    .header-cols {
        padding: 0px;
    }

</style>