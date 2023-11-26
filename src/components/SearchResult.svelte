<script lang="ts">
    import { Card, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
    export let resolution: string;
    export let url: string;
    export let quality: string;
</script>

<Card>
    {#if resolution == undefined}
        <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
            {quality}
        </h5>
    {:else}
        <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
            {resolution + " | " + quality}
        </h5>
    {/if}
    <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> -->
    <Button class="w-fit" href={url} target="_blank">
        Watch now <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
    </Button>
</Card>
