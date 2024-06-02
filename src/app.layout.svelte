<script>
    import TodoHeader from "./components/header/TodoHeader.svelte";
    import TodoFooter from "./components/footer/TodoFooter.svelte";
    import { appInfo, labels, icons } from "$lib/messages.js";

    import "./app.css";
    import "./app.style.css";

    import { groups } from "$lib/group.js";
    $: activeGroup = $groups.find(g => g.active);

    import { todos } from "$lib/todos.js";

    import Toast from "./components/sys/Toast.svelte";
    import { toasts } from "$lib/toast.js";
</script>


<svelte:head>
    <title>{appInfo.title}</title>
</svelte:head>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- <div class="container app-body" on:click={hiddenAddTodo}> -->
<div class="container app-body">

    <TodoHeader {groups} {activeGroup} {todos} {labels} {icons} />

    <div class="app-main">
        <!-- To-do Main Area -->
        <slot>
            <em>No content was provided.</em>
        </slot>
    </div>

    <TodoFooter />

</div>

{#each $toasts as toast (toast.id)}
    <Toast {...toast} />
{/each}