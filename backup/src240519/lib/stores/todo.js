import { writable, derived } from "svelte/store";

export const todos = writable([]);
export const currTodoIdx = writable(null);
export const currTodo = derived(
    [todos, currTodoIdx],
    ([$todos, $currTodoIdx]) => {
        return $todos.find(todo => todo.id === $currTodoIdx)
    }
);
export const addTodo = (todo) => {
    todos.update(todos => {
        todos.push(todo);
        return todos;
    });
}