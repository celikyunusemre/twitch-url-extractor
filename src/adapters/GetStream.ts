import type { StreamUrl } from "../models/response/StreamUrl.model";
import type { StreamDetails } from "../models/response/StreamDetails.model";
import { Timeout } from "./AdaptersHandler";


const api = "https://twitch-extractor-api.onrender.com/api";

export async function fetchStream(name: string): Promise<StreamUrl> {
    try {
        const path = `/search/stream/${name}`;
        const response = await fetch(api + path, {signal: Timeout(10).signal});
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`${data.message}`);
        }

        return data as StreamUrl;
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        throw error;
    }
}

export async function fetchStreamDetails(name: string): Promise<StreamDetails> {
    try {
        const path = `/search/stream/${name}/details`;
        const response = await fetch(api + path, {signal: Timeout(10).signal});
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`${data.message}`);
        }

        return data as StreamDetails;
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        throw error;
    }
}