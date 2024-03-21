<script lang="ts">
    import { onMount } from 'svelte';
    import { storeToken } from '../stores/twitchtoken.store';
    import { Button } from "flowbite-svelte";
    

    const twitchClientID: String = __TWITCH_API_CLIENTID__;
    const twitchSecret: String = __TWITCH_API_CLIENTSECRET__;
    const redirectURI: String = "https://twitchextractor.vercel.app";
    // const redirectURI: String = "http://localhost:5173";

    const authenticate = () => {
        const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchClientID}&redirect_uri=${redirectURI}&response_type=token&scope=user:read:follows`;
        window.location.href = authUrl;
    };

    const parseTokenFromHash = () => {
        const hashParams = new URLSearchParams(window.location.hash.substr(1));
        return hashParams.get('access_token');
    };

    onMount(() => {
        const token = parseTokenFromHash();
        if (token) {
            console.log(token)
            storeToken(token);
        }
    });
</script>

<!-- {#if !parseTokenFromHash()}
    <Button on:click={authenticate} color="primary">Connect Twitch</Button>
{/if} -->