import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

export function showTooltip(node, options) {
    const tooltip = tippy(node, options);

    return {
        update(options) {
            tooltip.setProps(options);
        },
        destroy() {
            tooltip.destroy();
        }
    };
}

export function resizeTextArea(event) {
    event.currentTarget.style.height = "auto";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
}