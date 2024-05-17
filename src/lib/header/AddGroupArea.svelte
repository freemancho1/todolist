<script>
    import { _addGroup, _groupList } from "$lib/stores.js";
    let newGroupName = "";
    $: groupList = $_groupList;

    const addGroup = () => {
        if (newGroupName === "") return;
        if (groupList.includes(newGroupName)) {
            alert("The same group name already exists.");
            newGroupName = "";
            return;
        }
        _addGroup(newGroupName);
        newGroupName = "";
    }
    const cancleGroup = () => newGroupName = "";
</script>


<div class="collapse" id="add-group">
    <div class="card card-body">

        <div class="row card-body-row">

            <div class="col-8">
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

            <div class="col-4 button-area">
                <div class="row align-item-center">
                    <div class="col-5">
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
                    </div>
                    <div class="col-7">
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
</div>

<style>

    .button-area {
        padding: 22px 0;
    }
    .add, .cancle {
        padding: 6px;
        max-width: 60px;
        font-size: 0.8em;
        color: #999;
        border: none !important;
    }
    .add {
        color: green;
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
        border-radius: 0px !important;
    }

</style>