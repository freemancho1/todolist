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
    'Favorites', 
    'Personal Things',
    'AI Distribution Design',
    'AI Platform',
    'Cloud-based Power Generation Fuel Cost Prediction'
]);
export const _activeGroupIndex = writable(1);
export const _activeGroupName = derived(
    [_groupList, _activeGroupIndex],
    ([$_groupList, $_activeGroupIndex]) => $_groupList[$_activeGroupIndex]
);
export function _addGroup(value) {
    _groupList.update(list => {
        list.push(value);
        return list;
    });
}

export const _searchString = writable("");