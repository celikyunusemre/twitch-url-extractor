<script lang="ts">
    import { onMount } from "svelte";
    import { fetchStream, fetchStreamDetails } from "../adapters/GetStream";
    import { fetchUserDetails } from "../adapters/GetUserDetails";
    import { Card, Button, Avatar, P, Alert } from "flowbite-svelte";
    import { streamData, addData } from "../stores/suggestions.store";
    import { setBannerMessage, bannerMessage } from "../stores/banner.store";

    const suggestions = [
        "jay3",
        "warn",
        "shroud",
        "summit1g",
        "ml7support",
        "tolunayoren",
        "castro_1021",
        "smoke",
        "tenz",
    ];
    const search = () => {
        setBannerMessage("Checking services...");
        suggestions.forEach(async (stream) => {
            let profileImg: string;
            fetchUserDetails(stream).then((userDetails) => {
                profileImg = userDetails.profile_image_url;
            });

            fetchStream(stream).then((streamUrls) => {
                fetchStreamDetails(stream).then((streamDetails) => {
                    addData({
                        name: stream,
                        data: streamUrls,
                        img: profileImg,
                        game: streamDetails.game_name,
                        title: streamDetails.title,
                        viewers: streamDetails.viewer_count,
                    });
                });
            });

            if ($bannerMessage !== "Services are alive!") {
                setBannerMessage("Services are alive!");
            }
        });
    };

    onMount(search);
</script>

{#if $streamData.length > 0}
    <div class="text-center flex flex-col justify-center items-center">
        <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >Suggestions</P
        >
    </div>

    <Card
        padding="none"
        size="xl"
        class="md:container md:mx-auto content-center my-8 grid md:grid-cols-2 gap-4 flex-wrap"
    >
        {#each $streamData as data}
            <figure
                id={data.name + "-suggestion-stream"}
                class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
            >
                <Avatar src={data.img} alt={data.name} class="flex-shrink-0" />
                <blockquote
                    class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
                >
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        {data.title}
                    </h3>
                    <h4
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        {data.name} is streaming {data.game} to {data.viewers} people!
                    </h4>

                    <Button
                        class="w-fit my-8"
                        href={data.data[0].url}
                        target="_blank"
                    >
                        Watch now in {data.data[0].quality}
                    </Button>
                </blockquote>
            </figure>
        {/each}
    </Card>
{/if}
