<script>
	import { onMount } from 'svelte';
    import { _todos, _addTodo } from '$lib/Todo.js';
    import { _activeGroupId } from '$lib/GroupMenu.js';
    import { toasts, showToast } from "$lib/Toast.js";
    import Toast from '../system/Toast.svelte';

    $: targetToasts = $toasts.addTodoArea;

    $: todos = $_todos;
    $: newTodoIndex = todos.length;
    $: newTodo = { 
        gid: $_activeGroupId,
        pid: 0,
        id: newTodoIndex, 
        title: "", 
        desc: "",
        startDate: null,
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
        // Clear & Close AddTodoArea
        // newTodo.title = newTodo.desc = "";
        document.getElementById("add-todo-area").classList.remove("show");

        if (!checkTodo()) return;
        _addTodo(newTodo);
        console.log('new todo:', newTodo);
        showToast("save-add-todo");
    }
    const checkTodo = () => {
        if (!newTodo.title) return false;
        return true
    }

    const showPicker = () => {
        const todoDate = document.getElementsByClassName("todo-date");
        todoDate.addEventListener("click", function(event) {
            this.showPicker();
        });
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

                <div class="row">
                    <div class="col-6"></div>
                    <div class="col-5">
                        <input 
                            type="date"
                            class="form-control todo-date"
                            bind:value={newTodo.startDate}
                        />
                    </div>
                    <div class="col-1 todo-repeat">
                        <button>
                            <i class="fa-solid fa-repeat"></i>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>


{#each targetToasts as toast}
    <Toast {...toast} />
{/each}


<style lang="scss">

    // div { border: 1px solid red; }

    #add-todo-area {
        margin: 0 -1em 0 -1em;

        .card {
            border-radius: 0px;
            border: none;
            padding: 0.4em 0.6em 0.4em 0.6em;
            color: var(--color-neutral);
            background-color: var(--bg-light);

            .done-button-area {
                color: var(--color-light);
                // padding-top: 0.4em;
                i {
                    cursor: pointer;
                }
            }

            .data-area {
                input {
                    box-shadow: none;
                    border: none;
                    background-color: var(--bg-light);
                    margin-bottom: 0em;
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
                        font-size: 1em;
                    }

                    &.todo-date {
                        color: var(--color-light);
                        font-size: 0.9em;
                        border: 1px solid var(--bg-dark);
                        border-radius: 50px;
                        margin: 0.3em 0 0.3em 0;
                        padding: 0.1em 0.5em 0 0.5em !important;
                    }
                    &:hover, &:focus {
                        background-color: var(--white);
                        cursor: pointer;
                    }
                }

                .todo-repeat {
                    padding: 0.4em 0 0 0;
                    button {
                        padding-left: 0;
                        border: none;
                        background-color: var(--bg-light);
                        color: var(--color-light);
                        font-size: 0.9em;
                        &:hover {
                            color: var(--danger);
                        }
                    }
                }
            }
        }
    }

    // input[type="date"]::-webkit-calendar-picker-indicator {
    //     border: 1px solid red;
    //     background: transparent;
    //     bottom: 0;
    //     color: transparent;
    //     cursor: pointer;
    //     height: auto;
    //     left: 0;
    //     position: absolute;
    //     right: 0;
    //     top: 0;
    //     width: auto;
    // }
    // input[type="date"]::-webkit-inner-spin-button,
    // input[type="date"]::-webkit-calendar-picker-indicator {
    //     display: none;
    // }

</style>