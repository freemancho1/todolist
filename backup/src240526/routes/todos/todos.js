import { writable } from "svelte/store";

export let todos = createTodoStore([
    { done: false, description: 'write some docs' },
    { done: false, description: 'start writing blog post' },
    { done: true, description: 'buy some milk' },
    { done: false, description: 'mow the lawn' },
    { done: false, description: 'feed the turtle' },
    { done: false, description: 'fix some bugs' }
]);

export function createTodoStore(initial) {
    let uid = 1;

    const todos = initial.map(({done, description}) => { 
        return {
            id: uid++,
            done,
            description
        };
    });

    const { subscribe, update } = writable(todos);

    return {
        subscribe,
        add: description => {
            const todo = {
                id: uid++,
                done: false,
                description
            };
            update($todos => [...$todos, todo])
        },
        remove: todo => {
            update($todos => $todos.filter((t) => t !== todo));
        },
        mark: (todo, done) => {
            update($todos => [
                ...$todos.filter((t) => t !== todo),
                {...todo, done}
            ]);
        }
    };
}