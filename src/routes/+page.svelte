<script>
    import AppLayout from "../app.layout.svelte";
    import { app } from "../stores/messages.js";
</script>


<AppLayout pageTitle={$app.title}>

    <div>Main app body</div>

</AppLayout>