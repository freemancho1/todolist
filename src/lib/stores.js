import { readable, writable, derived } from "svelte/store";


export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

export const _groupList = writable([
    {id: 0, title: 'Favorites'}, 
    {id: 1, title: 'Personal Things'},
    {id: 2, title: 'AI Distribution Design'},
    {id: 3, title: 'AI Platform'},
    {id: 4, title: 'Cloud-based Power Generation Fuel Cost Prediction'},
]);
export const _activeGroupId = writable(1);
export const _activeGroup = derived(
    [_groupList, _activeGroupId],
    ([$_groupList, $_activeGroupId]) => {
        return $_groupList.find(group => group.id === $_activeGroupId);
    }
);
export function _addGroup(value) {
    _groupList.update(list => {
        list.push(value);
        return list;
    });
}

export const _searchString = writable("");