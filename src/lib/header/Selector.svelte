<script>
	import { onMount } from 'svelte';
    
    let todoGroupName;
    let todoGroupList = [
        'Favorites', 
        'Personal Things',
        'AI Distribution Design',
        'AI Platform',
        'Cloud-based Power Generation Fuel Cost Prediction'
    ]

    let activeGroupIndex = null;
    const changeTodoGroupName = (index) => {
        todoGroupName = todoGroupList[index];
        console.log(`new name: ${todoGroupName}`);
        activeGroupIndex = index;
    }

    onMount(() => {
        todoGroupName = todoGroupList[1];
        activeGroupIndex = 1;
    });
</script>


<div 
    class="nav-link dropdown-toggle active-group-name" 
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
>
    <i class="fa-solid fa-angle-down"></i>
    {todoGroupName}
</div>

<ul class="dropdown-menu">
    {#each todoGroupList as group, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="dropdown-item"
                class:favorites={index==0 ? "favorites": "group"}
                class:active={activeGroupIndex === index ? "active": "no-active"}
                on:click={() => changeTodoGroupName(index)}
            >
                <i class={index==0 ? "fa-regular fa-star favorites": "fa-solid fa-circle-check"}></i>
                {group}
            </div>
        </li>
        {#if index===0 || index===(todoGroupList.length - 1)}
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
    .dropdown-item.no-active {
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 1.5em;
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
    /* .dropdown-item>i {
        margin: 0 1em 0 0;
        color: chocolate;
        display: none;
    } */
    .dropdown-item>i.active {
        margin: 0 1em 0 0;
        color: chocolate;
        display: inline;
    }
    .dropdown-item>i.favorites {
        margin: 0 1em 0 0;
        color: #888;
    }
    .dropdown-item {
        padding-left: 2em;
    }
    .dropdown-item>i {
        display: none;
    }
    .dropdown-item.active>i {
        display: inline;
    }
    .dropdown-item.active {
        background-color: white;
        color: #333;
    }
    .dropdown-item.favorites.active>i {
        margin: 0 1em 0 0;
        color: deeppink;
    }
    .dropdown-item.new>i {
        margin: 0 1em 0 0;
        color: darkcyan;
        display: inline;
    }
</style>