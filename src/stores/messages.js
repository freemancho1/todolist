import { writable } from "svelte/store";

export const app = writable({
    title: "To-to List",
});