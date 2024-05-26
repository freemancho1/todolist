<script>
    import tippy from "tippy.js";
    import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

    let addTodo = "Add to-do";
    let displayOptions = "Display options";

    function showTooltip(node, options) {
        const tooltip = tippy(node, options);

        return {
            update(options) {
                tooltip.setProps(options);
            },
            destroy() {
                tooltip.destroy();
            }
        };
    }

</script>


<div class="main-button-group">
    <button
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        aria-expanded="false" 
        href="#add-todo" 
        aria-controls="add-todo"
        use:showTooltip={{content: addTodo, theme: "meterial"}}
    >
        <i class="fa-solid fa-plus add"></i>
    </button>
    
    <button
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        aria-expanded="false" 
        aria-controls="addGroup"
        use:showTooltip={{content: displayOptions, theme: "meterial"}}
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