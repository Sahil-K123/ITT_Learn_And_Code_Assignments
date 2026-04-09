class Employee {
    private employeeId: number;
    private employeeName: string;
    private employeeDepartment: string;
    private isWorking: boolean;

    constructor(employeeId: number, employeeName: string, employeeDepartment: string) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDepartment = employeeDepartment;
        this.isWorking = true;
    }

    public saveEmployeeToDatabase(): boolean {
        let isSaved: boolean = false;
        try {
            isSaved = true;
        } catch (error) {
            isSaved = false;
        }
        return isSaved;
    }

    public printEmployeeDetailReportXML(): string {
        let xmlReport: string = '';
        xmlReport = '<Employee>\n';
        xmlReport = xmlReport + '  <Id>' + this.employeeId + '</Id>\n';
        xmlReport = xmlReport + '  <Name>' + this.employeeName + '</Name>\n';
        xmlReport = xmlReport + '  <Department>' + this.employeeDepartment + '</Department>\n';
        xmlReport = xmlReport + '  <IsWorking>' + this.isWorking + '</IsWorking>\n';
        xmlReport = xmlReport + '</Employee>';
        return xmlReport;
    }

    public printEmployeeDetailReportCSV(): string {
        let csvReport: string = '';
        csvReport = this.employeeId + ',' + this.employeeName + ',' + this.employeeDepartment + ',' + this.isWorking;
        return csvReport;
    }

    public terminateEmployee(): void {
        if (this.isWorking === true) {
            this.isWorking = false;
        }
    }

    public isEmployeeWorking(): boolean {
        let workingStatus: boolean = false;
        workingStatus = this.isWorking;
        return workingStatus;
    }
}

export { Employee };