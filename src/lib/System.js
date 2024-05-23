import { readable, writable } from "svelte/store";


export const _time = readable(
    new Date(), function start(set) {
        const interval = setInterval(() => {set(new Date());}, 1000);
        return function stop() {
            clearInterval(interval);
        }
    }
);


export const _searchString = writable("");


export class HandlePlaceholder {
    constructor(event) {
        this.event = event;
        this.placeholder = this.event.target.placeholder;
    }

    setFocus() {
        this.event.target.placeholder = "";
    }

    setBlur() {
        this.event.target.placeholder = this.placeholder;
    }
}