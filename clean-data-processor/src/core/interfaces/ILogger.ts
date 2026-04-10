export interface ILogger {
    log(message: string): void;
    save(): Promise<void>;
}