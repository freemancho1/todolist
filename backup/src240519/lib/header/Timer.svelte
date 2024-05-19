<script>
    import { time } from "$lib/stores.js";

    const formatter = new Intl.DateTimeFormat('ko', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour12: false, hour: 'numeric', minute: '2-digit', second: '2-digit'
    });
</script>

<div class="timer">{formatter.format($time)}</div>

<style>
    .timer {
        padding: 0 0 0 1em;
        font-size: 0.8em;
        /* font-size: 0.5em !important; */
        color: #bbb;
        margin-bottom: 0.5em;
    }
</style>