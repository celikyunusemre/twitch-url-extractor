import { writable } from "svelte/store";

export const bannerMessage = writable("Welcome to the Twitch URL Extractor!");

let message: string;

const messageSubscriber = bannerMessage.subscribe((value) => (message = value));

export function setBannerMessage(status?: string) {
    bannerMessage.set(status === undefined ? message : status);

}
