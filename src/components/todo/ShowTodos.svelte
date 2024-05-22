<script>
    import { _todos } from "$lib/Todo.js";

    $: todos = $_todos.reverse();
</script>


<ul class="todo-list">
    {#each todos as todo, index}
    <li>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div 
            id="todo-no{index}"
            class="show-todo-area"
            tabindex="0"
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
                                bind:value={todo.title}
                            />
                        </div>
        
                        <div>
                            <input 
                                type="text"
                                class="form-control todo-desc"
                                placeholder="description..."
                                bind:value={todo.desc}
                            />
                        </div>
        
                    </div>
        
                </div>
            </div>
        </div>
    </li>
    {/each}
</ul>


<style lang="scss">

    /* div { border: 1px solid red; } */

    .todo-list {
        list-style-type: none;
        margin: 0 -1em 0 -1em;
        padding: 0;

        .show-todo-area {
            margin: 0em;

            .card {
                border-radius: 0px;
                border: none;
                padding: 0.4em 0.6em 0.4em 0.6em;
                color: var(--color-neutral);
                background-color: var(--white);
                // margin-bottom: 1em;

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
                        background-color: var(--white);
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
                            font-size: 0.9em;
                        }
                    }
                }
            }
        }
    }

</style>