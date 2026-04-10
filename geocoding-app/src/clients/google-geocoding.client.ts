import axios from "axios";
import { config } from "../config/config";

export class GoogleGeocodingClient {

    async fetchCoordinates(place: string): Promise<any> {
        const url = `https://maps.googleapis.com/maps/api/geocode/json`;

        const response = await axios.get(url, {
            params: {
                address: place,
                key: config.googleApiKey
            }
        });

        return response.data;
    }
}