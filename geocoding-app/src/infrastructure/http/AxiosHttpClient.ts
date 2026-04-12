import axios from "axios";
import { HttpClient } from "../../interfaces/HttpClient";

export class AxiosHttpClient implements HttpClient {
    async get(url: string, params?: any): Promise<any> {
        const response = await axios.get(url, { params });
        return response.data;
    }
}