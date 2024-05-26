import { writable, derived } from "svelte/store";


export let groups = createGroupStore([
    {title: 'Favorites', type: "favorite", active: false}, 
    {title: 'Personal Things', type: "list-item", active: true},
    {title: 'AI Distribution Design', type: "list-item", active: false},
    {title: 'AI Platform', type: "list-item", active: false},
    {title: 'Cloud-based Power Generation Fuel Cost Prediction', type: "list-item", active: false},
]);


function createGroupStore(initial) {
    let uid = 1;
    let dindex = null;

    const groups = initial.map(({title, type, active}) => {
        return {
            id: uid++,
            title,
            type,
            active
        };
    });

    const { subscribe, update } = writable(groups);

    return {
        subscribe,
        add: title => {
            const group = {
                id: uid++,
                title,
                type: "list-item",
                active: false
            };
            update($groups => [...$groups, group]);
        },
        remove: group => {
            update($groups => $groups.filter(g => g !== group));
        },
        setActive: group => {
            update($groups => $groups.map(g => {
                if (g.id === group.id) {
                    return { ...g, active: true };
                } else if (g.active) {
                    return { ...g, active: false } 
                }
                return g;
            }));
        },
        setTitle: group => {
            // 같은 이름의 제목 유무 확인 후 처리
            let error = false;
            update($groups => {
                // const idx = $groups.findIndex(
                //     g => g.id !== group.id && g.title === group.title
                // );
                if ($groups.some(g => g.title === group.title)) {
                    error = true;
                } else {
                    $groups.map(g => {
                        if (g.id === group.id) {
                            return { ...g, title: group.title}
                        }
                        return g;
                    });
                } 
            });
            return error;
        },
        dragging: {
            start: (event, index) => {
                dindex = index;
                event.dataTransfer.effectAllowed = "move";
            },
            over: (index) => {
                if (dindex === index) return;
                update($groups => {
                    const changeGroups = [...$groups];
                    const dragGroup = changeGroups[dindex];
                    changeGroups.splice(dindex, 1);
                    changeGroups.splice(index, 0, dragGroup)
                    dindex = index;
                    return changeGroups;
                });
            },
            done: () => {
                update($groups => {
                    dindex = null;
                    return $groups;
                });
            }
        },
        getDraggingIndex: () => {
            return dindex;
        }, 
    }
}