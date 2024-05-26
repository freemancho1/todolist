<script>
    import { readable } from "svelte/store";

    const time = readable(
        new Date(), function start(set) {
            const interval = setInterval(() => {set(new Date());}, 1000);
            return function stop() {
                clearInterval(interval);
            }
        }
    );

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


<div class="app-timer">{formatter.format($time)}</div>


<style>

    .app-timer {
        padding: 0 0 0 1em;
        font-size: 13px !important;
        color: var(--color-light);
        margin-bottom: 0.5em;
    }

</style>