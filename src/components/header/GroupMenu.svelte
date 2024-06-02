<script>
    import { showTooltip } from "$lib/utils.js";

    export let groups;
    export let labels;
    export let icons;
    export let activeGroup;
</script>


<div 
    class="nav-link dropdown-toggle"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    use:showTooltip={{
        content: labels.group.menu, 
        theme: labels.tooltipTheme}}>

    <i class={icons.group.angleDown}></i>
    
    {activeGroup.title}

</div>

<ul 
    class="dropdown-menu">

    {#each $groups as group, index (group.id)}

        {#if group.type !== "list-item"}

            <li>
        
                <button 
                    class="dropdown-item {group.type} {group.active ? 'active' : 'non-active'}"
                    on:click={()=>groups.setActive(group)}>
        
                    <i class="{group.active ? icons.group.activeStar : icons.group.star}"></i>
        
                    {group.title}
        
                </button>
            </li>
        
        {:else}
        
            <li 
                draggable="true"
                class:dragging={index===groups.getDraggingIndex()}
                on:dragstart={(e)=>groups.dragging.start(e, index)}
                on:dragover|preventDefault={()=>groups.dragging.over(index)}
                on:drop|preventDefault={()=>groups.dragging.done()}
                on:dragend={()=>groups.dragging.done()}>

                <button 
                    class="dropdown-item {group.type} {group.active ? 'active' : 'non-active'}"
                    on:click={()=>groups.setActive(group)}> 

                    <i class={icons.group.checked}></i>

                    {group.title}

                </button>

            </li>
        
        {/if}

        {#if !index || index===($groups.length-1)}
            <li><hr class="dropdown-divider"/></li>
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
            <i class={icons.group.addGroup}></i>
            {labels.group.new}
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
            &.list-item {
                padding-left: 3.3em;
                i {
                    display: none;
                }
            }
            &.favorite > i {
                margin: 0 1em 0 0;
                color: var(--color-light);
            }
        }
        &.active {
            background-color: var(--white);
            color: var(--color-dark);
            &.list-item > i {
                margin: 0 1em 0 0;
                color: var(--warning);
            }
            &.favorite > i {
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