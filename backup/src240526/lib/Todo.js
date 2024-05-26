import { writable, derived } from "svelte/store";


export const _todos = writable([]);

export const _addTodo = (todo) => {
    _todos.update(_todos => {
        _todos.push(todo);
        return _todos;
    });
}

export const _updateTodo = (todo) => {
    _todos.update(_todos => {
        const idx = _todos.findIndex(
            _todo => 
                _todo.gid === todo.gid && 
                _todo.pid === todo.pid &&
                _todo.id === todo.id
        );
        if (idx !== -1) _todos[idx] = {...todo};
        return _todos;
    });
};