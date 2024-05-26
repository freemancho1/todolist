<script>
    import { onMount } from "svelte";
    import { resizeTextArea } from "$lib/Utils.js";
    import { HandleFocus, handleContainerFocus } from "$lib/System.js";
    import { _updateTodo } from "$lib/Todo.js";

    export let todo = null;
    // 변경 여부 체크를 위해 원본이 변경되도 변경되지 않도록 일반변수로 선언 
    let initTodo = todo;
    
    // todo area에서 포커스가 떠날 때 체크하기 위해 컨테이너 선언
    let todoContainer;
    const callbackPlaceholder = () => {
        if (todoContainer.contains(document.activeElement)) return;

        // Clear & Close AddTodo, and Save To-do
        if (todo.done) {
            todoContainer.classList.remove("show");
        }

        if (!checkTodo()) return;
        _updateTodo(newTodo);
        console.log(newTodo);
        showToast("update-todo");
    };
    const checkTodo = () => {
        if (todo === initTodo) return false;
        return true;
    }
    const handleFocus = new HandleFocus(callbackPlaceholder);

    const toggleDone = () => todo.done = !todo.done;

    import { toasts, showToast } from "$lib/Toast.js";
    import Toast from "../system/Toast.svelte";
    $: targetToasts = $toasts.showTodos;

    onMount(() => {
        // Todo입력창을 펼치라는 이벤트가 발생할 때 todo-desc 높이를 조정함
        const collapseEl = document.querySelector(".todo-item"+todo.id);
        collapseEl.addEventListener("show.bs.collapse", () => { 
            // console.log("11init todo:", initTodo);
            const textareas = collapseEl.querySelectorAll(".auto-resize");
            textareas.forEach(textarea => resizeTextArea({target: textarea}));
        });

        // 컨테이너가 포커스를 잃는지 체크 
        // 포커스를 잃으면 위 callbackPlaceholder를 실행함.
        handleContainerFocus(todoContainer, handleFocus);
    });
</script>


<div class="todo-item{todo.id}" bind:this={todoContainer}>

    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="todo" tabindex="0">

        <div class="card card-body">

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="row">

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="col-1 done-button" on:click={toggleDone}>
                    {#if todo.done}
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
                        bind:value={todo.title}
                        on:input={(event)=>resizeTextArea(event)}
                    ></textarea>

                    <textarea 
                        class="form-control todo-desc auto-resize"
                        rows="1"
                        placeholder="description..."
                        bind:value={todo.desc}
                        on:input={(event)=>resizeTextArea(event)}
                    ></textarea>

                    <div class="row">
                        <div class="col-7"></div>
                        <div class="col-4">
                            <input 
                                type="date"
                                class="form-control todo-date"
                                bind:value={todo.startDate}
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
            background-color: var(--white);

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
                    background-color: var(--white);
                    margin: 0 -1.5em 0 -0.5em;
                    padding: 2px 0 3px 1em !important;

                    &:focus {
                        background-color: var(--bg-light);
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
                        background-color: var(--white);
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