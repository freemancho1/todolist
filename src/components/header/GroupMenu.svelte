<script>
    import { _groupList, _activeGroupId, _activeGroup } from "$lib/GroupMenu.js";
    import { labels } from "$lib/Messages.js";

    $: groupList = $_groupList;
    $: activeGroupId = $_activeGroupId;
    $: activeGroup = $_activeGroup;
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


<div
    class="nav-link dropdown-toggle"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
>
    <i class="fa-solid fa-angle-down"></i>
    {activeGroup.title}
</div>

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
        <div
            data-bs-toggle="collapse" 
            href="#add-group" 
            role="button" 
            aria-expanded="false" 
            aria-controls="add-group"
            class="dropdown-item new"
        >
            <i class="fa-solid fa-folder-plus"></i>
            {$labels.createNewGroup}
        </div>
    </li>

</ul>


<style lang="scss">

    .nav-link {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--color-neutral);
        &::after {
            display: none;
        }
        i {
            margin-right: 0.5em;
            color: var(--color-neutral);
        }
    }

    .dropdown-menu {
        margin: -10px auto auto 1.8em;
        max-width: 390px;
        border-radius: 0;
    }
    
    .dropdown-item {
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--color-neutral);
        &.non-active {
            &.group {
                padding-left: 3.3em;
                i {
                    display: none;
                }
            }
            &.favorites > i {
                margin: 0 1em 0 0;
                color: var(--color-light);
            }
        }
        &.active {
            background-color: var(--white);
            color: var(--color-dark);
            &.group > i {
                margin: 0 1em 0 0;
                color: var(--warning);
            }
            &.favorites > i {
                margin: 0 1em 0 0;
                color: var(--danger);
            }
        }
        &.new > i {
            margin: 0 1em 0 0;
            color: var(--success);
            display: inline;
        }
    }

    .dragging {
        opacity: 0.5;
    }


</style>