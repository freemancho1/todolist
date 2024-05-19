<script>
    import { todos } from "$lib/stores/todo.js";

    $: _todos = [...$todos].reverse();
</script>

<ul>
    {#each _todos as todo}
    <li>
        <div class="card card-body">

            <div class="card-body-row">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        bind:value={todo.title}
                        class="form-control new-todo"
                        id="new-todo"
                        placeholder="new todo"
                    />
                    <label for="new-todo"></label>
                </div>
            </div>
    
        </div>
    </li>        
    {/each}
</ul>