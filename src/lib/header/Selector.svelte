<script>
    import { _groupList, _activeGroupIndex, _activeGroupName } from '$lib/stores.js';
    
    $: groupList = $_groupList;
    $: activeGroupIndex = $_activeGroupIndex;
    $: activeGroupName = $_activeGroupName;

    const changeGroup = (index) => _activeGroupIndex.set(index);
</script>


<div 
    class="nav-link dropdown-toggle active-group-name" 
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
>
    <i class="fa-solid fa-angle-down"></i>
    {activeGroupName}
</div>

<ul class="dropdown-menu">
    {#each groupList as group, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="dropdown-item 
                      {index===0 ? 'favorites': 'group'}
                      {activeGroupIndex === index ? 'active': 'no-active'}"
                on:click={() => changeGroup(index)}
            >
                <i class={
                    index==0 
                        ? (activeGroupIndex === index 
                            ? "fa-solid fa-star"
                            : "fa-regular fa-star")
                        : "fa-solid fa-circle-check"
                }></i>
                {group}
            </div>
        </li>
        {#if index===0 || index===(groupList.length - 1)}
        <li><hr class="dropdown-divider"></li>
        {/if}
    {/each}

    <li>
        <div class="dropdown-item new">
            <i class="fa-solid fa-calendar-plus"></i>
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
</style>