import * as readline from "readline";
import { App } from "./app";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = new App();

rl.question("Enter location: ", async (answer: string) => {
    await app.run(answer);
    rl.close();
});