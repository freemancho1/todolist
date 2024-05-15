<script>
    import "./app.css";
    import Header from "./routes/Header.svelte";
    import Footer from "./routes/Footer.svelte";

    export let pageTitle = "Todo List";
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<div class="container app-body">

    <Header />

    <div class="app-main">

        <slot>
            <em>No content was provided.</em>
        </slot>

    </div>

    <Footer />

</div>