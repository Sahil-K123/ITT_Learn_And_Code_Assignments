export interface IFileService {
    read(path: string): Promise<string[]>;
    write(path: string, data: string[]): Promise<void>;
}