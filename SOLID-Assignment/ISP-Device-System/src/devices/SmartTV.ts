import { Playable } from "../interfaces/Playable";

export class SmartTV implements Playable {
    play() {
        console.log("Streaming TV...");
    }
}