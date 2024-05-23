<div class="main-button-group">
    <button
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        aria-expanded="false" 
        href="#add-todo" 
        aria-controls="add-todo"
        title="add todo"
    >
        <i class="fa-solid fa-plus add"></i>
    </button>
    
    <button
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        aria-expanded="false" 
        aria-controls="addGroup"
        title="display options"
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