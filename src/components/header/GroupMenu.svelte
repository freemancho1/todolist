<script>
    import { _groupList, _activeGroupId, _activeGroupName } from "$lib/GroupMenu.js";
    import { labels } from "$lib/Messages.js";

    $: groupList = $_groupList;
    $: activeGroupId = $_activeGroupId;
    $: activeGroupName = $_activeGroupName;
    const changeActiveGroup = (index) => _activeGroupId.set(index);

    // Dragging
    let draggingIndex = null;
    function handleDragging(method, event=null, index=null) {
        switch (method) {
            case "start":
                draggingIndex = index;
                event.dataTransfer.effectAllowed = "move";
                return;
            case "over":
                if (draggingIndex === index) return;
                const changeGroupList = [...groupList];
                const dragGroup = changeGroupList[draggingIndex];
                changeGroupList.splice(draggingIndex, 1);
                changeGroupList.splice(index, 0, dragGroup);
                draggingIndex = index;
                _groupList.set(changeGroupList);
                return;
            case "drop":
            case "end":
                draggingIndex = null;
                return;
        }
    }
</script>


<button
    class="nav-link dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
>
    <i class="fa-solid fa-angle-down"></i>
    {activeGroupName}
</button>

<ul class="dropdown-menu">

    {#each groupList as group, index}

        {#if !group.id}

        <!-- Favorites -->
        <li>
            <button
                on:click={()=>changeActiveGroup(0)}
                class="dropdown-item favorites
                    {!activeGroupId ? 'active': 'non-active'}"
            >
                <i class={!activeGroupId 
                    ? "fa-solid fa-star": "fa-regular fa-star"}></i>
                {group.title}    
            </button>
        </li>

        {:else}
        
        <!-- Group Lists -->
        <li 
            draggable="true"
            on:dragstart={(e)=>handleDragging("start", e, index)}
            on:dragover|preventDefault={()=>handleDragging("over", null, index)}
            on:drop|preventDefault={()=>handleDragging("drop")}
            on:dragend={()=>handleDragging("end")}
            class:dragging={draggingIndex === index}
        >
            <button 
                on:click={()=>changeActiveGroup(group.id)}
                class="dropdown-item group
                    {activeGroupId === group.id ? 'active': 'non-active'}"
            >
                <i class="fa-solid fa-circle-check"></i>
                {group.title}
            </button>
        </li>

        {/if}

        <!-- divider -->
        {#if !index || index===(groupList.length-1)}
        <li><hr class="dropdown-divider"/></li>
        {/if}

    {/each}

    <!-- Create New Group -->
    <li>
        <button
            class="dropdown-item new"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="add-group"
        >
            <i class="fa-solid fa-folder-plus"></i>
            {$labels.createNewGroup}
        </button>
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
    .dropdown-item.non-active.group {
        padding-left: 3.3em;
    }
    


</style>