import { writable } from "svelte/store";

export const appInfo = writable({
    title: "To-to List",
});