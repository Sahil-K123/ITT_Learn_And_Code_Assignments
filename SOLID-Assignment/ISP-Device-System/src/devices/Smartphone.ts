import { Callable } from "../interfaces/Callable";
import { Playable } from "../interfaces/Playable";

export class Smartphone implements Callable, Playable {
    call() {
        console.log("Calling...");
    }

    play() {
        console.log("Playing music...");
    }
}