<script>
    import { resizeTextArea } from "$lib/utils.js";

	export let todo;
    export let labels;
    export let icons;

    const toggleDone = () => todo.done = !todo.done;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div 
    class="todo todo-{todo.gid}{todo.id}"
    class:done={todo.done}
    tabindex="{todo.gid}{todo.id}0">

    <div class="card card-body">

        <div class="row">

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="col-1 done-button"
                on:click={toggleDone}>

                {#if todo.done}
                <i class={icons.todo.done}></i>
                {:else}
                <i class={icons.todo.nonDone}></i>
                {/if}

            </div>

            <div class="col-11 data-area">

                <textarea 
                    class="form-control todo-title auto-resize-{todo.gid}{todo.id}"
                    rows="1"
                    placeholder={labels.todo.ph.title}
                    bind:value={todo.title}
                    on:input={(e)=>resizeTextArea(e)}></textarea>

                <textarea 
                    class="form-control todo-desc auto-resize-{todo.gid}{todo.id}"
                    rows="1"
                    placeholder={labels.todo.ph.desc}
                    bind:value={todo.desc}
                    on:input={(e)=>resizeTextArea(e)}></textarea>

                <div class="row">
                    <div class="col-7"></div>
                    <div class="col-4">
                        <input 
                            type="date"
                            class="form-control todo-date"
                            bind:value={todo.startDate}/>
                    </div>
                    <div class="col-1 todo-repeat">
                        <button><i class={icons.todo.repeat}></i></button>
                    </div>
                </div>

            </div>

        </div>

    </div>

</div>


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