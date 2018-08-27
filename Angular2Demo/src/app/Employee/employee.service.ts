import { IEmployee } from './Meta/employee'
import { OnInit, Injectable } from '@angular/core'
import { HttpModule } from '@angular/http'
//import { } from ''

@Injectable()
export class EmployeeService {

    private _emplist: IEmployee[];
    private _empListApi: IEmployee[];

    public getEmployees(): IEmployee[] {
        this._emplist = [
            { EmpID: '1000', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1002', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1003', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1004', EmpName: 'EmpName1', EmpGender: 'F', EmpSalary: '50000' },
            { EmpID: '1005', EmpName: 'EmpName1', EmpGender: 'F', EmpSalary: '50000' },
            { EmpID: '1005', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' }
        ];
        return this._emplist;
    }    

    //public getEmployeesApi(): obeser IEmployee[] {
    //}

}