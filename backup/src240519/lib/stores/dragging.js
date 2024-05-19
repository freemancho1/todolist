import { writable } from "svelte/store";

export const draggingIndex = writable(null);

export function handleDragging(method, event=null, index=null, objects=null) {
    switch (method) {
        case "start":
            draggingIndex.set(index);
            event.dataTransfer.effectAllowed = "mode";
            return;
        case "over":
            if (draggingIndex === index) return;
            const newObjects = [...objects];
            const object = newObjects[draggingIndex]
            newObjects.splice(draggingIndex, 1);
            newObjects.splice(index, 0, object);
            draggingIndex.set(index);
            // objects.set(newObjects);
            return newObjects;
        case "drop":
        case "end":
            draggingIndex.set(null);
            return;
    }
}