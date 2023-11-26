import { writable } from "svelte/store";

interface IStreamData {
    data: any,
    name: string,
    img: string
    game: string,
    title: string,
    viewers: number
}

export const streamData = writable<IStreamData[]>([]);

export function addData(data: IStreamData) {
    streamData.update((v) => {
        return [...v, data];
    });
}