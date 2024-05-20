import { readable } from "svelte/store";

export const appInfo = readable({
    title: "To-to List",
});

export const labels = readable({
    createNewGroup: "Create New Group",
});
