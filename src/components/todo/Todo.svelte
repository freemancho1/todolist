<script>
    import { onMount } from "svelte";
    import { resizeTextArea } from "$lib/Utils.js";
    import { HandleFocus, handleContainerFocus } from "$lib/System.js";

    export let mode = null;
    export let todo = null;

    let todoContainer;
    const callbackPlaceholder = () => {
        if (todoContainer.contains(document.activeElement)) return;
        console.log("save todo", todo);
    };
    const handleFocus = new HandleFocus(callbackPlaceholder);

    onMount(() => {
        handleContainerFocus(todoContainer, handleFocus);
    });
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div 
    class="todo {mode==="new-todo" ? 'new-todo': 'list-todo'}"
    class:done={todo.done}
    tabindex="0"
    bind:this={todoContainer}
>
    <div class="card card-body">
        <div class="row">

            <div class="col-1 done-button">
                {#if todo.done}
                    <i class="fa-solid fa-circle-check"></i>
                {:else}
                    <i class="fa-regular fa-circle"></i>
                {/if}
            </div>

            <div class="col-11 data-area">

                <input 
                    type="text"
                    class="form-control todo-title"
                    placeholder="to-do.."
                    bind:value={todo.title}
                />

                <textarea 
                    class="form-control todo-desc auto-resize"
                    rows="1"
                    placeholder="description..."
                    wrap="hard"
                    bind:value={todo.desc}
                    on:input={(event)=>resizeTextArea(event)}
                ></textarea>

            </div>

        </div>
    </div>

</div>


<style lang="scss">

    .todo.new-todo {
        --todo-bg-color: var(--bg-light);
        --todo-color: var(--color-neutral);
    }
    .todo.list-todo {
        --todo-bg-color: var(--white);
        --todo-color: var(--color-neutral);
    }

    .todo {
        margin: 0 -1em 0 -1em;

        .card-body {
            border-radius: 0;
            border: none;
            padding: 0.4em 0.6em 0.4em 0.6em;
            color: var(--todo-color);
            background-color: var(--todo-bg-color);

            .done-button {
                color: var(--todo-color);
                cursor: pointer;
            }

            .data-area {
                input, 
                textarea {
                    box-shadow: none;
                    border: none;
                    background-color: var(--todo-gb-color);
                    margin-bottom: 0;
                    padding: 4px 0 5px 0 !important;
                }
                
                textarea {
                    box-sizing: border-box;
                    overflow: hidden;
                    resize: none;
                }
            }
        }
    }


</style>