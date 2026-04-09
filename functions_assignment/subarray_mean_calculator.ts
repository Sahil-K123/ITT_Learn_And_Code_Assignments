declare const require: (module: string) => any;
declare const process: {
    stdin: any;
    stdout: any;
};

const readline = require('readline');

interface InputDetails {
    arrayLength: number;
    numberOfQueries: number;
}

interface Query {
    left: number;
    right: number;
}

function readInputDetails(line: string): InputDetails {
    const [arrayLength, numberOfQueries] = line.split(' ').map(Number);
    return { arrayLength, numberOfQueries };
}

function readArray(line: string, size: number): number[] {
    return line.split(' ').map(Number).slice(0, size);
}

function buildPrefixSum(arr: number[]): number[] {
    const prefixSum: number[] = [0];

    for (let i = 0; i < arr.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + arr[i];
    }

    return prefixSum;
}

function readQuery(line: string): Query {
    const [left, right] = line.split(' ').map(Number);
    return { left, right };
}

function findAverage(prefixSum: number[], query: Query): number {
    const { left, right } = query;

    const sum = prefixSum[right] - prefixSum[left - 1];
    const length = right - left + 1;

    return Math.floor(sum / length);
}

async function processAllQueries(
    prefixSum: number[],
    totalQueries: number,
    readLine: () => Promise<string>
): Promise<void> {
    for (let i = 0; i < totalQueries; i++) {
        const line = await readLine();
        const query = readQuery(line);
        const result = findAverage(prefixSum, query);
        console.log(result);
    }
}

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const readLine = (): Promise<string> => {
        return new Promise(resolve => rl.once('line', resolve));
    };

    const firstLine = await readLine();
    const { arrayLength, numberOfQueries } = readInputDetails(firstLine);

    const secondLine = await readLine();
    const array = readArray(secondLine, arrayLength);

    const prefixSum = buildPrefixSum(array);

    await processAllQueries(prefixSum, numberOfQueries, readLine);

    rl.close();
}

main();