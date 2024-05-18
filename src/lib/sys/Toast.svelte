<script>
    // 0-primary, 1-success, 2-info, 3-warning, 4-danger
    export let type = 0;    
    export let id = "";
    export let title = "";
    export let message = "";

    const typeInfo = [
        {img: "fa-solid fa-star", color: "#fff", bgColor: "#0d6efd"},
        {img: "fa-solid fa-thumbs-up", color: "#fff", bgColor: "#20c997"},
        {img: "fa-solid fa-circle-info", color: "#fff", bgColor: "#0dcaf0"},
        {img: "fa-solid fa-triangle-exclamation", color: "#fff", bgColor: "#fd7e14"},
        {img: "fa-solid fa-bug", color: "#fff", bgColor: "#dc3545"},
    ]
</script>


<div class="
    toast-container 
    position-fixed top-0 start-50 translate-middle-x">
    <div 
        id={id}
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style="
            background-color: {typeInfo[type].bgColor} !important;
            color: {typeInfo[type].color};"
    >
        <div class="toast-body">
            <div class="row justify-content-between">
                <div class="col-10">
                    <i class="{typeInfo[type].img}"></i>
                    <strong class="me-auto">{title}</strong>
                </div>
                <div class="col-1">
                    <div
                        type="button" 
                        class="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    >
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="message">
                {message}
            </div>
        </div>
    
    </div>
</div>


<style>

    /* div {
        border: 1px solid white;
    } */

    .toast-container {
        margin-top: 80px;
    }

    .toast-body {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .btn-close {
        margin-left: 1em;
        width: 1.5em; /* Adjust size as needed */
        height: 1.5em; /* Adjust size as needed */
        background: none;
        border: none;
        padding: 0;
        -webkit-appearance: none;
        appearance: none;
    }
    .btn-close .fas {
        font-size: 1.2em; /* Adjust size as needed */
        color: white; /* Change this to your desired color */
    }

    strong {
        margin-left: 0.6em;
    }

    .message {
        margin: 0.5em 0.5em 0em 1.9em;
        padding-top: 0.5em;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

</style>