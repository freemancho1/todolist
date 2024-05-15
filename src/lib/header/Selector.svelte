<script>
	import { onMount } from 'svelte';
    
    let todoGroupName;
    let todoGroupList = [
        'Personal Things',
        'AI Distribution Design',
        'AI Platform',
        'Cloud-based Power Generation Fuel Cost Prediction'
    ]

    const changeTodoGroupName = (name) => {
        todoGroupName = name;
        console.log(`new name: ${name}`);
    }

    onMount(() => {
        todoGroupName = todoGroupList[0];
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
    <li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="dropdown-item"
            on:click={() => changeTodoGroupName("Favorites")}
        >
            <i class="fa-regular fa-star favorites"></i>
            Favorites
        </div>
    </li>
    <li><hr class="dropdown-divider"></li>
    {#each todoGroupList as group}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class="dropdown-item"
                on:click={() => changeTodoGroupName(group)}
            >
                <i class="fa-solid fa-circle-check"></i>
                {group}
            </div>
        </li>
    {/each}
    <li><hr class="dropdown-divider"></li>
    <li>
        <div class="dropdown-item">
            <i class="fa-solid fa-calendar-plus new"></i>
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
    .dropdown-item>i.favorites.active {
        margin: 0 1em 0 0;
        color: deeppink;
    }
    .dropdown-item>i.new {
        margin: 0 1em 0 0;
        color: darkcyan;
        display: inline;
    }
</style>