import { writable, derived } from "svelte/store";


export const _groupList = writable([
    {id: 0, title: 'Favorites'}, 
    {id: 1, title: 'Personal Things'},
    {id: 2, title: 'AI Distribution Design'},
    {id: 3, title: 'AI Platform'},
    {id: 4, title: 'Cloud-based Power Generation Fuel Cost Prediction'},
]);

export const _activeGroupId = writable(1);
export const _activeGroupName = derived(
    [_groupList, _activeGroupId],
    ([$_groupList, $_activeGroupId]) => {
        return $_groupList.find(group => group.id === $_activeGroupId);
    }
);

export const _addNewGroup = (object) => {
    _groupList.update(objects => {
        objects.push(object);
        return objects;
    });
};