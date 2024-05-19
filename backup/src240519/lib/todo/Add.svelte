<script>
    import { onMount } from "svelte";
    import { todos, addTodo } from "$lib/stores/todo.js";

    $: _todos = $todos
    $: lastIdx = _todos.length;
    $: newTodo = {id: lastIdx, title: ""};
    
    let todoContainer;
    const handleFocus = (event) => '';
    const handleBlur = (event) => {
        setTimeout(() => {
            if (!todoContainer.contains(document.activeElement)) {
                chechAndAddTodo();
            }
        }, 0);
    }
    const closeAddArea = () => {
        const addArea = document.getElementById("add-todo");
        addArea.classList.remove("show");
    }
    const chechAndAddTodo = () => {
        console.log("Check and Add Todo");
        if (newTodo.title === "") return;
        addTodo(newTodo);
        console.log($todos);
        closeAddArea();
    }

    onMount(() => {
        todoContainer.addEventListener("focusin", handleFocus);
        todoContainer.addEventListener("focusout", handleBlur);
        return () => {
            todoContainer.removeEventListener("focusin", handleFocus);
            todoContainer.removeEventListener("focusout", handleBlur);
        };
    });
</script>


<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<form
    class="collapse" 
    id="add-todo"
    tabindex="0"
    bind:this={todoContainer}
>
    <div class="card card-body">

        <div class="card-body-row">
            <div class="form-floating mb-3">
                <input
                    type="text"
                    bind:value={newTodo.title}
                    class="form-control new-todo"
                    id="new-todo"
                    placeholder="new todo"
                />
                <label for="new-todo">Enter new todo</label>
            </div>
        </div>

    </div>
</form>