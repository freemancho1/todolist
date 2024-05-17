
<div class="collapse" id="addGroup">
    <div class="card card-body">
        <div class="row">
            <div class="form-floating mb-3 col-8">
                <input 
                    type="email" 
                    class="form-control input-new-group-name" 
                    id="newGroupName" placeholder="group name"
                >
                <label for="newGroupName">Enter new group name</label>
            </div>

            <div class="col-4 button-area position-relative">
                <div
                    class="btn btn-white add position-absolute top-50 end-0 translate-middle" 
                    data-bs-toggle="collapse" 
                    href="#addGroup" 
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="addGroup"
                    title="add todo"
                >
                    Add
                </div>
                <div
                    class="btn btn-white cancle position-absolute top-50 end-0 translate-middle" 
                    data-bs-toggle="collapse" 
                    href="#addGroup" 
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="addGroup"
                    title="add todo"
                >
                    Cancle
                </div>
            </div>
        </div>
    </div>
</div>

<style>

    div {
        border: 1px solid red;
    }

    .button-area {
        padding: 0px;
    }
    .add, .cancle {
        padding: 6px;
    }

    .form-floating {
        margin: 0px !important;
        color: #999;
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

    .collapse {
        margin: 0.2em 12px;
    }

</style>