<script lang="ts">
    import { fetchStream } from "../adapters/GetStream";
    import Spinner from "../components/Spinner.svelte";
    import SearchResult from "./SearchResult.svelte";
    import Suggestions from "./Suggestions.svelte";
    // import TwitchAuth from "./TwitchAuth.svelte";
    import {
        Label,
        Input,
        Button,
        InputAddon,
        ButtonGroup,
    } from "flowbite-svelte";
    import { Alert } from "flowbite-svelte";
    import { onMount } from "svelte";
    import {
        toggleSpinnerVisible,
        visible as isSpinnerVisible,
    } from "../stores/spinner.store";

    let isBtnDisabled: boolean;
    let isFail: boolean;
    let failMsg: string;
    let searchedText: string;

    let result: any;

    const toggleFailAlert = async (state: boolean) => {
        isFail = state;
    };

    const search = async () => {
        // Reset state
        result = null;
        toggleFailAlert(false);
        failMsg = "";

        // Disable button and show spinner
        isBtnDisabled = true;
        toggleSpinnerVisible(!$isSpinnerVisible);

        // Validate input
        if (searchedText === "") {
            failMsg = "Please enter a channel name";
        } else if (
            searchedText.includes("?") ||
            searchedText.includes("#") ||
            searchedText.includes("$")
        ) {
            failMsg = "Input includes non acceptable characters";
        } else if (!searchedText.match(/[a-zA-Z0-9]{3,25}/)) {
            failMsg = "Please enter a valid channel name";
        }

        // Handle validation errors
        if (failMsg) {
            toggleFailAlert(true);
            toggleSpinnerVisible(!$isSpinnerVisible);
            isBtnDisabled = false;
            return;
        }

        fetchStream(searchedText)
            .then((stream) => {
                result = stream;
            })
            .catch((error) => {
                failMsg = error;
                toggleFailAlert(true);
            })
            .finally(() => {
                isBtnDisabled = false;
                toggleSpinnerVisible(!$isSpinnerVisible);
            });
    };

    const streamers = ["shroud", "jay3", "lirik"];
    function getRandomStreamerUsername() {
        console.log(__YEC__)
        var randomStreamer = Math.floor(Math.random() * streamers.length);
        document
            .getElementById("input-addon")
            .setAttribute("placeholder", streamers[randomStreamer]);
    }
    onMount(getRandomStreamerUsername);
</script>

<div id="search" class="md:container md:mx-auto">
    <div class="pt-8">
        <Label for="input-addon" class="mb-2">Search Live Streamer</Label>
        <ButtonGroup class="w-full">
            <InputAddon><i class="fa-brands fa-twitch"></i></InputAddon>
            <Input
                id="input-addon"
                type="text"
                placeholder="bashengatv"
                bind:value={searchedText}
                disabled={isBtnDisabled}
            />
            <Button on:click={search} color="primary" disabled={isBtnDisabled}
                >Search</Button
            >
        </ButtonGroup>
        {#if isFail}
            <Alert color="red" class="!items-start">
                <span slot="icon">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </span>
                <p class="font-medium">{failMsg}</p>
            </Alert>
        {/if}
    </div>
    <Spinner />
</div>

<div
    id="search-result"
    class="md:container md:mx-auto content-center my-8 grid grid-cols-3 gap-4 flex-wrap"
>
    {#if Array.isArray(result)}
        {#each result as item}
            <SearchResult
                resolution={item.resolution}
                url={item.url}
                quality={item.quality}
            />
        {/each}
    {/if}
</div>

<div id="suggestions">
    <Suggestions />
</div>

<!-- <TwitchAuth /> -->