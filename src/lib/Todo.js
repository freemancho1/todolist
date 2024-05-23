import { writable, derived } from "svelte/store";
import { _activeGroupId } from "./GroupMenu.js";


export const _todos = writable([]);

export const _newTodo = writable({
    gid: _activeGroupId,
    pid: 0,
    id: _todos.length,
    title: "",
    desc: "",
    startDate: null,
    done: false,
});


export const _addTodo = (todo) => {
    _todos.update(_todos => {
        _todos.push(todo);
        return _todos;
    });
}