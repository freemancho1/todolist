import { writable, derived } from "svelte/store";


export const _todos = writable([]);


export const _addTodo = (todo) => {
    _todos.update(_todos => {
        _todos.push(todo);
        return _todos;
    });
}