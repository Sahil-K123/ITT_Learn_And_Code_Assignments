import { HttpClient } from "../interfaces/HttpClient";
import { config } from "../config/config";
import { GeocodingClient } from "../interfaces/GeocodingClient";

export class GoogleGeocodingClient implements GeocodingClient {

    constructor(private httpClient: HttpClient) {}

    async fetchCoordinates(place: string): Promise<any> {
        const url = `https://maps.googleapis.com/maps/api/geocode/json`;

        return this.httpClient.get(url, {
            address: place,
            key: config.googleApiKey
        });
    }
}