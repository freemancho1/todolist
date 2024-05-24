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
        console.log(callback);
    }

    setFocus(event) {
        this.placeholder = event.target.placeholder;
        event.target.placeholder = "";
    }

    setBlur(event) {
        event.target.placeholder = this.placeholder;
        this.placeholder = "";
        console.log("aaaa")
        if (this.callback !== null) {
            console.log("ccccc");
            setTimeout(this.callback(), 0);
        }
    }
}