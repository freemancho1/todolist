import { readable } from "svelte/store";

export const appInfo = readable({
    title: "To-to List",
});

export const labels = readable({
    add: "Add",
    save: "Save",
    cancle: "Cancle",    
    createNewGroup: "Create New Group",
    enterNewGroupName: "Enter new group name",
});
