<script lang="ts">
    import { onMount } from 'svelte';
    import { storeToken } from '../stores/twitchtoken.store';
    

    const twitchClientID: String = __TWITCH_API_CLIENTID__;
    const twitchSecret: String = __TWITCH_API_CLIENTSECRET__;
    const redirectURI: String = "https://twitchextractor.vercel.app/";

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
            storeToken(token); // Pass the token to the store for storage
            console.log(token)
            // Redirect to a different route or perform other actions
        }
    });
</script>

<button on:click={authenticate}>Connect Twitch</button>