import type { UserDetails } from "../models/response/UserDetails.model";
import { Timeout } from "./AdaptersHandler";

const api = "https://twitch-extractor-api.onrender.com/api";

export async function fetchUserDetails(name: string): Promise<UserDetails> {
    try {
        const path = `/search/user/${name}`;
        const response = await fetch(api + path, {signal: Timeout(10).signal});
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`${data.message}`);
        }

        // Assuming the response is an object that matches UserDetails
        if (typeof data !== 'object') {
            throw new Error('Invalid response format. Expected an object.');
        }

        return data as UserDetails;
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        throw error;
    }
}