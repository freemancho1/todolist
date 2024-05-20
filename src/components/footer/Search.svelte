<script>
    import { _searchString } from "$lib/System.js";

    let isActive = false;
    let searchString = "";

    const changeSearchString = () => _searchString.set(searchString);
    const handleFocus = () => isActive = true;
    const handleBlur = () => isActive = false;
    const resetSearchString = () => {
        if (!searchString) return;
        searchString = "";
        changeSearchString();
    }
</script>


<div class="search">

    <div class="input-group">

        <!-- 
            svelte-ignore 
            a11y-click-events-have-key-events 
            a11y-no-static-element-interactions 
        -->
        <span 
            class:active={isActive}
            class:not-null-search-string={searchString}
            on:click={()=>resetSearchString()}
        >
            <i class={
                searchString 
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-magnifying-glass search"
            }></i>
        </span>

        <input 
            bind:value={searchString}
            on:input={()=>changeSearchString()}
            on:focus={handleFocus}
            on:blur={handleBlur}
            type="text"
            placeholder="Search..."
            class="form-control"
        />

    </div>

</div>


<style lang="scss">

    span {
        border: none;
        border-radius: var(--radius);
        border-bottom: 1px solid var(--border-light);
        padding-right: 0px;
        background-color: var(--bg-light);

        .active {
            border-bottom: 2px solid var(--success);
            i {
                color: var(--success);
            }
        }
    }
    /* span.active {
        border-bottom: 2px solid var(--success);
    }
    span.active>i {
        color: var(--success);
    } */
    span.not-null-search-string {
        cursor: pointer;
    }
    i {
        font-size: 1em;
        margin: 0.7em 0.5em 0em 1em;
        color: var(--color-neutral);
    }

    input {
        border: none;
        border-bottom: 1px solid var(--border-light);
    }
    input:focus {
        box-shadow: none;
        border-bottom: 2px solid var(--success);
        color: var(--success);
    }

</style>