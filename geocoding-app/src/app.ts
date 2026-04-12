import { GeocodingService } from "./services/geocoding.service";
import { GoogleGeocodingClient } from "./clients/google-geocoding.client";
import { AxiosHttpClient } from "./infrastructure/http/AxiosHttpClient";
import { validateInput } from "./utils/validator";

export class App {
    private service = new GeocodingService(new GoogleGeocodingClient(new AxiosHttpClient()));

    async run(locationInput: string): Promise<void> {
        try {
            validateInput(locationInput);

            const results = await this.service.getLocation(locationInput);

            console.log("\n📍 Results:");
            results.forEach((loc, index) => {
                console.log(`\nResult ${index + 1}:`);
                console.log(`Name: ${loc.name}`);
                console.log(`Latitude: ${loc.latitude}`);
                console.log(`Longitude: ${loc.longitude}`);
            });

        } catch (error: any) {
            console.error("❌ Error:", error.message);
        }
    }
}