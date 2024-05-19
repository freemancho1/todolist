<script>
    import { _groupList, _activeGroupId, _activeGroup } from '$lib/stores.js';
    
    $: groupList = $_groupList;
    $: activeGroupId = $_activeGroupId;
    $: activeGroup = $_activeGroup;

    const changeGroup = (index) => _activeGroupId.set(index);

    // Dragging
    let draggingIndex = null;

    function handleDragStart(event, index) {
        draggingIndex = index;
        event.dataTransfer.effectAllowed = "move";
    }

    function handleDragOver(index) {
        if (draggingIndex === index) return;

        const newGroupList = [...groupList];
        const group = newGroupList[draggingIndex];
        newGroupList.splice(draggingIndex, 1);
        newGroupList.splice(index, 0, group);
        draggingIndex = index;
        _groupList.set(newGroupList);
    }

    function handleDrop() {
        draggingIndex = null;
    }

    function handleDragEnd() {
        draggingIndex = null;
    }

</script>


<div 
    class="nav-link dropdown-toggle active-group-name" 
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
>
    <i class="fa-solid fa-angle-down"></i>
    {activeGroup.title}
</div>

<ul 
    class="dropdown-menu"
>
    {#each groupList as group, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        {#if group.id === 0}
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="dropdown-item favorites
                      {activeGroupId === 0 ? 'active': 'no-active'}"
                on:click={() => changeGroup(0)}
            >
                <i class={
                    activeGroupId === 0
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                }></i>
                {group.title}
            </div>
        </li>
        {:else}
        <li
            draggable="true"
            on:dragstart={(event) => handleDragStart(event, index)}
            on:dragover|preventDefault={() => handleDragOver(index)}
            on:drop|preventDefault={handleDrop}
            on:dragend={handleDragEnd}
            class:dragging={draggingIndex === index}
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="dropdown-item group
                      {activeGroupId === group.id ? 'active': 'no-active'}"
                on:click={() => changeGroup(group.id)}
            >
                <i class="fa-solid fa-circle-check"></i>
                {group.title}
            </div>
        </li>
        {/if}
        {#if index===0 || index===(groupList.length - 1)}
        <li><hr class="dropdown-divider"></li>
        {/if}
    {/each}

    <li>
        <div 
            data-bs-toggle="collapse" 
            href="#add-group" 
            role="button" 
            aria-expanded="false" 
            aria-controls="add-group"
            class="dropdown-item new"
        >
            <i class="fa-solid fa-folder-plus"></i>
            Create New Group
        </div>
    </li>
</ul>


<style>
    .dropdown-menu {
        margin: -10px auto auto 1.8em;
        max-width: 390px;
    }
    .dropdown-item {
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dropdown-item.no-active.group {
        padding-left: 3.3em;
    }
    .dropdown-item.no-active.group>i {
        display: none;
    }
    .dropdown-item.active {
        background-color: white;
        color: #333;
    } 
    .dropdown-item.active.group>i {
        margin: 0 1em 0 0;
        color: chocolate;
    }
    .dropdown-item.active.favorites>i {
        margin: 0 1em 0 0;
        color: deeppink;
    }
    .dropdown-item.no-active.favorites>i {
        margin: 0 1em 0 0;
        color: #999;
    }

    .active-group-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .active-group-name>i {
        margin-right: 0.5em;
        color: #888;
    }
    .dropdown-toggle::after {
        display: none;
    }

    .dropdown-item.new>i {
        margin: 0 1em 0 0;
        color: darkcyan;
        display: inline;
    }

    .dragging {
        opacity: 0.5;
    }

</style>