<script>
    import { onMount } from "svelte";
    import { resizeTextArea } from "$lib/Utils.js";
    import { HandleFocus, handleContainerFocus } from "$lib/System.js";
    import { _todos, _addTodo } from "$lib/Todo.js";
    import { _activeGroupId } from "$lib/GroupMenu.js";

    $: todos = $_todos;
    $: newTodoIndex = todos.length;
    let newTodo = {};
    // add-todo가 열릴 때 마다 초기화 시켜줌
    const initNewTodo = () => {
        newTodo = {
            gid: $_activeGroupId,
            pid: 0,
            id: newTodoIndex,
            title: "",
            desc: "",
            startDate: null,
            done: false,
        };
    };

    let todoContainer;
    const callbackPlaceholder = () => {
        if (todoContainer.contains(document.activeElement)) return;

        // Clear & Close AddTodo, and Save To-do
        todoContainer.classList.remove("show");

        if (!checkTodo()) return;
        _addTodo(newTodo);
        console.log(newTodo);
        showToast("save-add-todo");
    };
    const checkTodo = () => {
        if (!newTodo.title) return false;
        return true;
    }
    const handleFocus = new HandleFocus(callbackPlaceholder);

    const toggleDone = () => newTodo.done = !newTodo.done;

    import { toasts, showToast } from "$lib/Toast.js";
    import Toast from "../system/Toast.svelte";
    $: targetToasts = $toasts.addTodo; 

    onMount(() => {
        // Todo입력창을 펼치라는 이벤트가 발생할 때 todo-desc 높이를 조정함
        const collapseEl = document.querySelector(".add-todo");
        collapseEl.addEventListener("show.bs.collapse", () => {
            initNewTodo();
            // console.log("11init todo:", initTodo);
            const textareas = collapseEl.querySelectorAll(".auto-resize");
            textareas.forEach(textarea => resizeTextArea({target: textarea}));
        });

        // 컨테이너가 포커스를 잃는지 체크 
        // 포커스를 잃으면 위 callbackPlaceholder를 실행함.
        handleContainerFocus(todoContainer, handleFocus);
    });
</script>


<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="add-todo" class="collapse add-todo" bind:this={todoContainer}>

    <div 
        class="todo"
        class:done={newTodo.done}
        tabindex="0"
    >
        <div class="card card-body">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="row">

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div 
                    class="col-1 done-button"
                    on:click={toggleDone}
                >
                    {#if newTodo.done}
                        <i class="fa-solid fa-circle-check"></i>
                    {:else}
                        <i class="fa-regular fa-circle"></i>
                    {/if}
                </div>

                <div class="col-11 data-area">

                    <textarea 
                        class="form-control todo-title auto-resize"
                        rows="1"
                        placeholder="to-do.."
                        bind:value={newTodo.title}
                        on:input={(event)=>resizeTextArea(event)}
                    ></textarea>

                    <textarea 
                        class="form-control todo-desc auto-resize"
                        rows="1"
                        placeholder="description..."
                        bind:value={newTodo.desc}
                        on:input={(event)=>resizeTextArea(event)}
                    ></textarea>

                    <div class="row">
                        <div class="col-7"></div>
                        <div class="col-4">
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

</div>


{#each targetToasts as toast}
    <Toast {...toast} />
{/each}

<style lang="scss">

    .todo {
        margin: 0 -1em 0 -1em;

        .card-body {
            border-radius: 0;
            border: none;
            padding: 0.4em 0.6em 0.4em 0.6em;
            color: var(--color-neutral);
            background-color: var(--bg-light);

            .done-button {
                color: var(--color-light);
                padding-top: 0em;
                cursor: pointer;
            }

            .data-area {
                padding-right: 0;

                .todo-title, 
                .todo-desc,
                .todo-date {
                    box-shadow: none;
                    border: none;
                    border-radius: 0em;
                    background-color: var(--bg-light);
                    margin: 0 -1.5em 0 -0.5em;
                    padding: 2px 0 3px 1em !important;

                    &:focus {
                        background-color: var(--white);
                    }
                }
                
                .todo-title {
                    color: var(--color-dark);
                    font-weight: bold;
                }

                .todo-desc {
                    font-size: 0.9em;
                    color: var(--color-neutral);
                }

                .todo-title,
                .todo-desc {
                    padding-right: 1em !important;
                    min-height: 1.9em !important;
                    box-sizing: border-box;
                    overflow: hidden;
                    resize: none;
                }

                .todo-date {
                    font-size: 0.8em;
                    color: var(--color-neutral);
                    padding-left: 1.5em !important;
                    &::-webkit-calendar-picker-indicator {
                        cursor: pointer;
                    }
                }

                .todo-repeat {
                    margin: -0.1em 0 0 -1.5em !important;
                    padding: 0 6px 0 6px;
                    button {
                        border: none;
                        background-color: var(--bg-light);
                        color: var(--color-light);
                        font-size: 0.8em;
                        &:hover {
                            color: var(--danger);
                        }
                    }
                }
            }
        }
    }


</style>