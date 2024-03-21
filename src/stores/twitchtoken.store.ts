import { writable } from 'svelte/store';

const twitchTokenStore = writable<string | null>(null);

export const storeToken = (token: string) => {
  localStorage.setItem('twitch_token', token);
  twitchTokenStore.set(token);
};

export const getStoredToken = () => {
  return localStorage.getItem('twitch_token');
};
