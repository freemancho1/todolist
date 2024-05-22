import { readable } from "svelte/store";

export const toastTypeInfos = readable([
    {img: "fa-solid fa-star", color: "var(--white)", bgColor: "var(--primary)"},
    {img: "fa-solid fa-thumbs-up", color: "var(--white)", bgColor: "var(--success)"},
    {img: "fa-solid fa-circle-info", color: "var(--white)", bgColor: "var(--info)"},
    {img: "fa-solid fa-triangle-exclamation", color: "var(--white)", bgColor: "var(--warning)"},
    {img: "fa-solid fa-bug", color: "var(--white)", bgColor: "var(--danger)"},
]);
export const toasts = readable({
    addGroupArea: [
        {
            type: 1, 
            id: "save-add-group", 
            title: "Success",
            message: "The to-do list has been saved successfully."
        },
        {
            type: 4, 
            id: "error-add-group", 
            title: "Error", 
            message: "The to-do list you entered already exists."
        },
    ], 
    addTodoArea: [
        {
            type: 1,
            id: "save-add-todo",
            title: "Success",
            message: "The to-do has been saved successfully.",
        }
    ]
});
export function showToast(toastId, subMessage="") {
    const targetToast = document.getElementById(toastId);
    const content = targetToast.querySelector("#var-message");
    content.innerHTML = subMessage;
    const toast = bootstrap.Toast.getOrCreateInstance(targetToast);
    toast.show();
}