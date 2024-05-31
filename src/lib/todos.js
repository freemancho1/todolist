import { writable } from "svelte/store";


export let todos = createTodoStore([
    {gid: 5, pid: 0, title: "Write a new research project plan.", desc: "write a new research project plan."},
    {gid: 5, pid: 0, title: "New research project PT writing.", desc: "new research project pt writing."},
    {gid: 4, pid: 0, title: "Preparation for assignment result evaluation.", desc: "preparation for assignment result evaluation."},
    {gid: 3, pid: 0, title: "Transfer of research project results.", desc: "transfer of research project results."},
]);


function createTodoStore(initial) {
    let ids = [];
    function addIds(idIndex) {
        if (ids[idIndex] === undefined) ids[idIndex] = 0;
        ids[idIndex] += 1;
        return ids[idIndex];
    }

    let dragIndex = null;

    const todos = initial.map(({gid, pid, title, desc}) => {
        return {
            gid,
            pid,
            id: addIds(gid),
            title,
            desc,
            startDate: null,
            done: false,
        };
    });

    const { subscribe, update } = writable(todos);

    return {
        subscribe,
        init: () => {
            return {
                gid: 0, 
                pid: 0, 
                id: 0, 
                title: "", 
                desc: "", 
                startDate: null, 
                done: false
            };
        },
        add: todo => {
            const t = { ...todo, id: addIds(todo.gid) };
            update($todos => [ ...$todos, t ]);
        },
        remove: todo => {
            update($todos => $todos.filter(t => t !== todo));
        },
        toggleActive: todo => {
            update($todos => $todos.map(t => 
                t === todo ? { ...t, done: !t.done } : t
            ));
        },
        update: todo => {
            update($todos => $todos.map(t => {
                if (t.gid === todo.gid && t.id === todo.id) return todo;
                return t;
            }));
        },
        showList: (gid=null, searchStr=null) => {
            const $todos = get({ subscribe });
            if (gid !== null ) return $todos.filter(t => t.gid === gid);
            if (searchStr !== null) return $todos.filter(t => t.title.toLowerCase().includes(searchStr.toLowerCase()));
            return $todos;
        },
    }
    
}