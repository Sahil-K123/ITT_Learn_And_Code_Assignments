import { GoogleGeocodingClient } from "../clients/google-geocoding.client";
import { Location } from "../domain/location";

export class GeocodingService {
    private client = new GoogleGeocodingClient();

    async getLocation(place: string): Promise<Location[]> {
        const data = await this.client.fetchCoordinates(place);

        if (data.status !== "OK") {
            throw new Error(`API Error: ${data.status}`);
        }

        return data.results.map((result: any) => ({
            name: result.formatted_address,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng
        }));
    }
}