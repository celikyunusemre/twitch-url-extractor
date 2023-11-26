import { writable } from "svelte/store";

export const visible = writable(false);

let isSpinnerVisible: boolean;

const visibleSubscriber = visible.subscribe((value) => (isSpinnerVisible = value));

export function toggleSpinnerVisible(status?: boolean) {
    visible.set(status === undefined ? !isSpinnerVisible : status);
}