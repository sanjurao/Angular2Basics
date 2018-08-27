import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: "app/Employee/employee.componet.html"
})
export class EmployeeComponet { 
    EmpFName: string = "sanju";
    EmpLName: string = "Rao";
    EmpGender: string = "Male";
    EmpAge: string = "29";
    columspan: string = "2";
    showDetails: boolean = false;
    toggle(): void {
        this.showDetails = !this.showDetails
    }
}