<script lang="ts">
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import Banner from "./components/Banner.svelte";
  import { routes } from "./routes";
</script>

<Navbar />
<!-- <Banner /> -->
<Router {routes} />
