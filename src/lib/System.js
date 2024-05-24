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


export class HandleFocus {
    constructor(callback) {
        this.placeholder = "";
        this.callback = callback;
    }

    setFocus(event) {
        this.placeholder = event.target.placeholder;
        event.target.placeholder = "";
    }

    setBlur(event) {
        event.target.placeholder = this.placeholder;
        this.placeholder = "";
        if (this.callback !== null) setTimeout(this.callback, 0);
    }
}
export const handleContainerFocus = (el, cls) => {
    el.addEventListener("focusin", cls.setFocus.bind(cls));
    el.addEventListener("focusout", cls.setBlur.bind(cls));
    return () => {
        el.removeEventListener("focusin", cls.setFocus.bind(cls));
        el.removeEventListener("focusout", cls.setBlur.bind(cls));
    };
}