<script>
    import { toastTypeInfos } from "$lib/Toast.js";

    export let type = 0;
    export let id = "";
    export let title = "";
    export let message = "";
</script>


<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x">

    <div 
        id={id}
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style="
            background-color: {$toastTypeInfos[type].bgColor} !important;
            color: {$toastTypeInfos[type].color};"
    >

        <div class="toast-body">
            <div class="row justify-content-between">
    
                <div class="col-10">
                    <i class="{$toastTypeInfos[type].img}"></i>
                    <strong>{title}</strong>
                </div>
    
                <div class="col-1">
                    <button 
                        class="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    >
                        <i class="fas fa-times"></i>
                    </button>
                </div>
    
            </div>
        </div>

        <div class="toast-message">
            {message}
            <div id="var-message"></div>
        </div>

    </div>

</div>


<style lang="scss">

    .toast-container {
        margin-bottom: 5px;
    }

    .toast {
        border-radius: 0px;
        border: none;
    }

    strong {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 0.6em;
    } 

    .toast-body {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .toast-message {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0em 0.5em 0em 2.7em;
        padding: 1em 0 1em 0;
        border-top: 1px solid var(--white);
    }
    #var-message {
        white-space: normal;
        overflow: visible;
        display: block;
    }

    .btn-close {
        margin-left: -1em;
        width: 1.5em; /* Adjust size as needed */
        height: 1.5em; /* Adjust size as needed */
        background: none;
        // border: none !important;
        box-shadow: none !important;
        padding: 0;
        -webkit-appearance: none;
        appearance: none;

        i {
            font-size: 1.2em; /* Adjust size as needed */
            color: white; /* Change this to your desired color */
            // border: none !important;
            // box-shadow: none !important;
        }
    }

</style>