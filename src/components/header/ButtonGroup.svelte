<script>
    import { showTooltip } from "$lib/utils.js";

    export let labels;
</script>


<div class="main-button-group">
    <button
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        aria-expanded="false" 
        href="#add-todo" 
        aria-controls="add-todo"
        use:showTooltip={{
            content: labels.tooltip.todo, 
            theme: labels.tooltip.theme
        }}
    >
        <i class="fa-solid fa-plus add"></i>
    </button>
    
    <button
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        aria-expanded="false" 
        aria-controls="addGroup"
        use:showTooltip={{
            content: labels.tooltip.options, 
            theme: labels.tooltip.theme,
        }}
    >
        <i class="fa-solid fa-ellipsis-vertical options"></i>
    </button>
</div>


<style lang="scss">

    .main-button-group {
        padding: 0 0 0 15px;
    }

    button {
        padding: 0px;
        outline: none !important;
        border: none;
    }

    i {
        color: var(--color-light);
        margin-left: 1.1em;
        &.add:hover {
            color: var(--primary);
        }
        &.options:hover {
            color: var(--danger);
        }
    }

</style>