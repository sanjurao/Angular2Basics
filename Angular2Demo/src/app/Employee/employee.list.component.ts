import { Component, OnInit } from '@angular/core'
import { IEmployee } from './Meta/employee'
import { EmployeeService } from './employee.service'


@Component({
    selector: '<emplist></emplist>',
    templateUrl: 'app/Employee/employee.list.component.html',
    providers: [EmployeeService]
})
export class employeeListComponent implements OnInit {

    ngOnInit(): void {
        //this is used gor input and output 
        this.employeeList1 = this.employeeService.getEmployees();
    }
    employeeList: any[];
    employeeList1: IEmployee[];
    SelectedRadioButnval: string =  'All';

    constructor(private employeeService: EmployeeService) {
        this.employeeList = [
            { EmpID: '1000', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1002', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1003', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1004', EmpName: 'EmpName1', EmpGender: 'F', EmpSalary: '50000' },
            { EmpID: '1005', EmpName: 'EmpName1', EmpGender: 'F', EmpSalary: '50000' }
        ]
        
    }
    getNewEmployees(): void {
        this.employeeList = [
            { EmpID: '1000', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1002', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1003', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1004', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1005', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1006', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' }
        ]
    }
    trackByEmployeeId(index: number, employeeList: any): string {
        return employeeList.EmpID;
    }
    getTotalNumberEmployee(): number {
        return this.employeeList1.length;
    }
    getMaleEmployee(): number {
        return this.employeeList1.filter(m => m.EmpGender === "M").length;
    }
    getFemaleEmployee(): number {
        return this.employeeList1.filter(f => f.EmpGender === "F").length;
    }
    SetValFromChildComponet(SelectedValue: string): void {
        this.SelectedRadioButnval = SelectedValue;
    }
}