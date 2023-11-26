<script lang="ts">
    import { visible } from "../stores/spinner.store";
    import { Jumper } from "svelte-loading-spinners";
</script>

<div class="spinner flex justify-center my-8">
    {#if $visible}
        <Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
    {/if}
</div>
