interface Customer {
    customerId: string;
    companyName: string;
    contactName: string;
    country: string;
}

export class CustomerSearch {
    private customers: Customer[];

    constructor(customers: Customer[]) {
        this.customers = customers;
    }

    
    private search(predicate: (customer: Customer) => boolean): Customer[] {
        return this.customers
            .filter(predicate)
            .sort((a, b) => a.customerId.localeCompare(b.customerId));
    }

    
    searchByCountry(country: string): Customer[] {
        return this.search(c => c.country.includes(country));
    }

    
    searchByCompanyName(companyName: string): Customer[] {
        return this.search(c => c.companyName.includes(companyName));
    }

    
    searchByContactName(contactName: string): Customer[] {
        return this.search(c => c.contactName.includes(contactName));
    }

    
    exportToCSV(data: Customer[]): string {
        let csv = "";

        data.forEach(customer => {
            csv += `${customer.customerId},${customer.companyName},${customer.contactName},${customer.country}\n`;
        });

        return csv;
    }
}