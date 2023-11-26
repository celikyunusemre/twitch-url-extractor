<script lang="ts">
    import { Banner } from "flowbite-svelte";
    import { BullhornSolid } from "flowbite-svelte-icons";
    import { bannerMessage } from "../stores/banner.store";
</script>

<Banner id="bottom-banner" position="absolute" bannerType="bottom">
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
        <BullhornSolid class="w-3 h-3 text-gray-500 dark:text-gray-400" />
      </span>
      <span>
        {$bannerMessage}
      </span>
    </p>
</Banner>