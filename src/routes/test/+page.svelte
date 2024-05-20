<script>
    import { onMount } from "svelte";

    let aa = "";
    let ab = "0";
    let ba = 0;
    let bb = -1;
    let ca = undefined;

    onMount(() => {
        console.log("'' is", aa ? "true": "false");         // false
        console.log("'0' is", ab ? "true": "false");        // true
        console.log("0 is", ba ? "true": "false");          // false
        console.log("-1 is", bb ? "true": "false");         // true
        console.log("undefined is", ca ? "true": "false");  // false
    });
</script>

"" 
{#if aa}
    true
{:else}
    false
{/if}
<p/>

"0" 
{#if ab}
    true
{:else}
    false
{/if}
<p/>

0 
{#if ba}
    true
{:else}
    false
{/if}
<p/>

-1
{#if bb}
    true
{:else}
    false
{/if}
<p/>

undefined
{#if ca}
    true
{:else}
    false
{/if}
<p/>