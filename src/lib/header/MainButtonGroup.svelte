<script>
</script>

<div class="main-button-group">

    <a
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        href="#add-group" 
        aria-expanded="false" 
        aria-controls="add-group"
        title="add todo"
    >
        <i class="fa-solid fa-plus add"></i>
    </a>

    <a
        class="btn btn-white" 
        data-bs-toggle="collapse" 
        href="#addGroup" 
        aria-expanded="false" 
        aria-controls="addGroup"
        title="display options"
    >
        <i class="fa-solid fa-ellipsis-vertical options"></i>
    </a>

</div>


<style>
    .main-button-group {
        padding: 0 0 0 55px;
    }
    a {
        padding: 0px;
        outline: none !important;
        border: none;
    }

    i {
        color: #777;
        margin-left: 10px;
    }

    i.add:hover {
        color: green;
    }
    i.options:hover {
        color: coral;
    }

</style>