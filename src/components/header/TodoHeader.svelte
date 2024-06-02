<script>
	import Timer from './Timer.svelte';
    import GroupMenu from './GroupMenu.svelte';
    import ButtonGroup from './ButtonGroup.svelte';
	import AddGroup from './AddGroup.svelte';

    export let groups;
    export let activeGroup; 
    export let todos;
    export let labels;
    export let icons;
</script>


<nav class="navbar sticky-top app-header">

    <Timer />

    <div class="container row">

        <div class="col-9 header-cols">
            <GroupMenu {groups} {labels} {icons} {activeGroup}/>
        </div>

        <div class="col-3">
            <ButtonGroup />
        </div>

    </div>

</nav>

<AddGroup {groups} {labels} />


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