import * as readline from "readline-sync";

class AdjacentCountriesTable{
    
    private countryBordersMap: { [key: string]: string[] } = {
        IN: ["Pakistan", "Nepal"],
        US: ["Canada", "Mexico"],
        CA: ["USA"],
        CN: ["India", "Russia"],
        FR: ["Spain", "Germany"],
        NZ: ["Australia"],
    };

    getAdjacentCountriesByCode(countryCode: string): string[] | undefined {
        const normalizedCode = countryCode.trim().toUpperCase();
        return this.countryBordersMap[normalizedCode];
    }

    promptAndDisplayAdjacentCountries(): void {
        const userInput = readline.question(
            "Enter country code : "
        );

        const adjacentCountries = this.getAdjacentCountriesByCode(userInput);
        const normalizedCode = userInput.trim().toUpperCase();

        if (!adjacentCountries) {
            console.log(`No data found for code '${normalizedCode}'.`);
        } 
        else if (adjacentCountries.length === 0) {
            console.log(`'${normalizedCode}' has no adjacent countries.`);
        } 
        else {
            console.log(
                `Adjacent countries: ${adjacentCountries.join(", ")}`
            );
        }
    }
}

const lookup = new AdjacentCountriesTable();
lookup.promptAndDisplayAdjacentCountries();
