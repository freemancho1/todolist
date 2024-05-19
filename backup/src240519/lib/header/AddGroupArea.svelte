<script>
    import { _addGroup, _groupList } from "$lib/stores.js";
    import Toast from "$lib/sys/Toast.svelte";

    let newGroupName = "";
    $: groupList = $_groupList;

    const addGroup = () => {
        if (newGroupName === "") return;
        if (groupList.some(item => item.title.includes(newGroupName))) {
            showToast("error-toast");
            newGroupName = "";
            return;
        }
        const newGroup = {
            id: groupList.length, title: newGroupName
        }
        _addGroup(newGroup);
        newGroupName = "";
        showToast("save-toast");
    }
    const cancleGroup = () => newGroupName = "";

    const toastInfos = [
        {type: 1, id: "save-toast", title: "Success", message: "The to-do list has been saved successfully."},
        {type: 4, id: "error-toast", title: "Error", message: "The to-do list you entered already exists."},
    ]
    function showToast(id) {
        const targetToast = document.getElementById(id);
        const toast = bootstrap.Toast.getOrCreateInstance(targetToast);
        toast.show();
    }

</script>


<div class="collapse" id="add-group">
    <div class="card card-body">

        <div class="card-body-row">
            <div class="form-floating mb-3">
                <input 
                    type="text"
                    bind:value={newGroupName}
                    class="form-control input-new-group-name"
                    id="new-group-name"
                    placeholder="new group name"
                />
                <label for="new-group-name">Enter new group name</label>
            </div>
        </div>

        <div class="button-area">
            <div class="row">
                <div class="col-8">
                </div>
                <div class="col-4">
                    <button 
                        class="btn btn-white add"
                        data-bs-toggle="collapse"
                        href="#add-group"
                        aria-expanded="false"
                        aria-controls="add-group"
                        on:click={addGroup}
                    >
                        Add
                    </button>
                    <button 
                        class="btn btn-white cancle"
                        data-bs-toggle="collapse"
                        href="#add-group"
                        aria-expanded="false"
                        aria-controls="add-group"
                        on:click={cancleGroup}
                    >
                        Cancle
                    </button>
                </div>
            </div>
        </div>

    </div>
</div>

{#each toastInfos as info}
    <Toast {...info} />
{/each}

<style>

    /* div {
        border: 1px solid red;
    } */

    /* .button-area {
        padding: 22px 0;
    } */
    .add, .cancle {
        padding: 12px 6px 0 6px;
        max-width: 60px;
        font-size: 0.8em;
        color: #999;
        border: none !important;
    }
    .add {
        color: green;
    }
    .cancle {
        margin-left: 20px;
    }

    .form-floating {
        margin: 0px !important;
        color: #999;
        font-size: 0.9em;
    }

    .input-new-group-name {
        border: none;
        border-bottom: 1px solid #ddd;
    }
    .input-new-group-name:focus {
        box-shadow: none;
        border-bottom: 1px solid chocolate;
        color: chocolate;
    }

    .card {
        /* margin: 0.2em 12px; */
        border: none;
        /* border-radius: 0px !important; */
    }

</style>