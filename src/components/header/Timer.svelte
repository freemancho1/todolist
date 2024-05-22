<script>
    import { _time } from "$lib/System.js";

    const formatter = new Intl.DateTimeFormat(
        "ko", {
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour12: false, 
            hour: 'numeric', 
            minute: '2-digit', 
            second: '2-digit'
        }
    );
</script>


<div class="app-timer">{formatter.format($_time)}</div>


<style>

    .app-timer {
        padding: 0 0 0 1em;
        font-size: 13px !important;
        color: var(--color-light);
        margin-bottom: 0.5em;
    }

</style>