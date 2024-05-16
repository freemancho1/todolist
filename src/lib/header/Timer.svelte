<script>
    import { time } from "$lib/stores.js";

    const formatter = new Intl.DateTimeFormat('ko', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour12: false, hour: 'numeric', minute: '2-digit', second: '2-digit'
    });
</script>

<div>{formatter.format($time)}</div>

<style>
    div {
        padding: 0 0 0 1em;
        font-size: 0.8em;
        color: #888;
    }
</style>