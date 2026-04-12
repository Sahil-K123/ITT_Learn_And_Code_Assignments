export interface GeocodingClient {
    fetchCoordinates(place: string): Promise<any>;
}