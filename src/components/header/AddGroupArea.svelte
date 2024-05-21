<script>
    import { _addNewGroup, _groupList } from "$lib/GroupMenu.js";
    import { toasts, showToast } from "$lib/System.js";
    import { labels } from "$lib/Messages.js";
    import Toast from "../system/Toast.svelte";

    $: targetToasts = $toasts.addGroupArea;

    let newGroupName = "";
    $: groupList = $_groupList;

    const addNewGroup = () => {
        if (!newGroupName) return;
        if (groupList.some(item => item.title === newGroupName)) {
            showToast("error-add-group", `Error group name: ${newGroupName}`);
            newGroupName = "";
            return;
        }
        const newGroup = {
            id: groupList.length, title: newGroupName
        }
        _addNewGroup(newGroup);
        showToast("save-add-group", `Save group name: ${newGroupName}`);
        newGroupName = "";
    }
    const cancleNewGroup = () => newGroupName = "";
</script>


<div class="collapse" id="add-group">
    <div class="card card-body">

        <div class="card-body-row">
            <div class="form-floating mb-3">
                <input 
                    id="new-group-name"
                    type="text"
                    bind:value={newGroupName}
                    class="form-control"
                    placeholder="new"
                />
                <label for="new-group-name">{$labels.enterNewGroupName}</label>
            </div>
        </div>

        <div class="button-area">
            <div class="row">

                <div class="col-8"></div>

                <div class="col-4">
                    <button 
                        class="btn btn-white add"
                        data-bs-toggle="collapse"
                        href="#add-group"
                        aria-expanded="false"
                        aria-controls="add-group"
                        on:click={addNewGroup}
                    >
                        {$labels.add}
                    </button>
                    <button 
                        class="btn btn-white cancle"
                        data-bs-toggle="collapse"
                        href="#add-group"
                        aria-expanded="false"
                        aria-controls="add-group"
                        on:click={cancleNewGroup}
                    >
                        {$labels.cancle}
                    </button>
                </div>

            </div>
        </div>

    </div>
</div>

{#each targetToasts as toast}
    <Toast {...toast} />
{/each}


<style lang="scss">

    .card {
        border: none;
    }

    .form-floating {
        margin: 0px !important;
        color: var(--color-light);
        font-size: 0.9em;
    }

    input {
        border: none;
        border-bottom: 1px solid var(--border-light);
        &:focus {
            box-shadow: none;
            border-bottom: 2px solid var(--success);
            color: var(--success);
        }
    }

    .add, .cancle {
        padding: 12px 6px 0 6px;
        max-width: 60px;
        font-size: 0.8em;
        border: none !important;
    }
    .add {
        color: var(--primary);
    }
    .cancle {
        margin-left: 20px;
        color: var(--danger);
    }

</style>