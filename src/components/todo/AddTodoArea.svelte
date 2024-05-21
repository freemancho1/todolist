<script>
	import { onMount } from 'svelte';
    import { _todos, _addTodo } from '$lib/Todo.js';
    import { _activeGroupId } from '$lib/GroupMenu.js';

    $: todos = $_todos;
    $: newTodoIndex = todos.length;
    let newTodo = { 
        gid: $_activeGroupId,
        id: newTodoIndex, 
        title: "", 
        desc: "" 
    };

    let addTodoAreaContainer;
    let lastPlaceholderText;
    const handleElementFocus = (event) => {
        lastPlaceholderText = event.target.placeholder;
        event.target.placeholder = "";
    }
    const handleElementBlur = (event) => {
        event.target.placeholder = lastPlaceholderText;
        lastPlaceholderText = "";
        setTimeout(() => {
            if (!addTodoAreaContainer.contains(document.activeElement)) addTodo();
        }, 0);
    }
    const addTodo = () => {
        if (!checkTodo()) return;
        _addTodo(newTodo);

        // Close AddTodoArea
        addTodoAreaContainer.classList.remove("show");
    }
    const checkTodo = () => {
        if (!newTodo.title) return false;
        return true
    }

    // Check Element Focus
    onMount(() => {
        addTodoAreaContainer.addEventListener("focusin", handleElementFocus);
        addTodoAreaContainer.addEventListener("focusout", handleElementBlur);
        return () => {
            addTodoAreaContainer.removeEventListener("focusin", handleElementFocus);
            addTodoAreaContainer.removeEventListener("focusout", handleElementBlur);
        };
    });
</script>


<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div 
    id="add-todo-area"
    class="collapse"
    tabindex="0"
    bind:this={addTodoAreaContainer}
>
    <div class="card card-body">
        <div class="row">

            <div class="col-1 done-button-area">
                <i class="fa-regular fa-circle"></i>
            </div>

            <div class="col-11 data-area">
                
                <div>
                    <input 
                        type="text"
                        class="form-control todo-title"
                        placeholder="to-do.."
                        bind:value={newTodo.title}
                    />
                </div>

                <div>
                    <input 
                        type="text"
                        class="form-control todo-desc"
                        placeholder="description..."
                        bind:value={newTodo.desc}
                    />
                </div>

            </div>

        </div>
    </div>
</div>


<style lang="scss">

    /* div { border: 1px solid red; } */

    #add-todo-area {
        margin: -1em;

        .card {
            border-radius: 0px;
            border: none;
            padding: 0.4em 0.6em 0.4em 0.6em;
            color: var(--color-neutral);
            background-color: var(--bg-light);

            .done-button-area {
                color: var(--color-light);
                // padding-top: 0.4em;
            }

            .data-area {
                input {
                    box-shadow: none;
                    border: none;
                    background-color: var(--bg-light);
                    margin-bottom: 0.3em;
                    padding: 0px !important;
                    &::placeholder {
                        color: var(--color-light);
                    }
                    &.todo-title {
                        color: var(--color-dark);
                        font-weight: bold;
                    }
                    &.todo-desc {
                        color: var(--color-neutral);
                        font-size: 0.9em;
                    }
                }
            }
        }
    }

</style>