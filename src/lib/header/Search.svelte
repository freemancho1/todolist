<script>
    import { _searchString } from "$lib/stores.js";

    let isActive = false;
    let searchString = '';

    const changeSearchString = () => {
        console.log(`Search String: ${searchString}`);
        _searchString.set(searchString);
    }
    const focusHandler = () => isActive = true;
    const blurHandler = () => isActive = false;
    const resetSearchString = () => {
        if (searchString === "") return;
        searchString = "";
        changeSearchString();
    }
</script>


<div class="input-group">

    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <span 
        class="input-group-text" 
        class:active={isActive}
        class:not-null-search-string={searchString !== ''}
        on:click={()=>resetSearchString()}
    >
        <i class={
            searchString !== ''
                ? "fa-solid fa-xmark"
                : "fa-solid fa-magnifying-glass search"
        }></i>
    </span>
    <input 
        type="text" 
        placeholder="Search..."
        bind:value={searchString}
        on:input={() => changeSearchString()}
        on:focus={focusHandler} on:blur={blurHandler}
        class="form-control search">

</div>

<style>
    .input-group-text {
        border: none;
        border-bottom: 1px solid #efe;
        padding-right: 0;
        background-color: white;
    }
    .search {
        border: none;
        border-bottom: 1px solid #efe;
    }
    .search:focus {
        box-shadow: none;
        border-bottom: 1px solid chocolate;
        color: chocolate;
    }
    i {
        color: #888;
    }
    span.active {
        border-bottom: 1px solid chocolate;
    }
    span.active>i {
        color: chocolate;
    }
    .not-null-search-string {
        cursor: pointer;
    }
</style>