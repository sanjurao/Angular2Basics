"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var employeeListComponent = /** @class */ (function () {
    function employeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.SelectedRadioButnval = 'All';
        this.employeeList = [
            { EmpID: '1000', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1002', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1003', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1004', EmpName: 'EmpName1', EmpGender: 'F', EmpSalary: '50000' },
            { EmpID: '1005', EmpName: 'EmpName1', EmpGender: 'F', EmpSalary: '50000' }
        ];
    }
    employeeListComponent.prototype.ngOnInit = function () {
        //this is used gor input and output 
        this.employeeList1 = this.employeeService.getEmployees();
    };
    employeeListComponent.prototype.getNewEmployees = function () {
        this.employeeList = [
            { EmpID: '1000', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1002', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1003', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1004', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1005', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' },
            { EmpID: '1006', EmpName: 'EmpName1', EmpGender: 'M', EmpSalary: '50000' }
        ];
    };
    employeeListComponent.prototype.trackByEmployeeId = function (index, employeeList) {
        return employeeList.EmpID;
    };
    employeeListComponent.prototype.getTotalNumberEmployee = function () {
        return this.employeeList1.length;
    };
    employeeListComponent.prototype.getMaleEmployee = function () {
        return this.employeeList1.filter(function (m) { return m.EmpGender === "M"; }).length;
    };
    employeeListComponent.prototype.getFemaleEmployee = function () {
        return this.employeeList1.filter(function (f) { return f.EmpGender === "F"; }).length;
    };
    employeeListComponent.prototype.SetValFromChildComponet = function (SelectedValue) {
        this.SelectedRadioButnval = SelectedValue;
    };
    employeeListComponent = __decorate([
        core_1.Component({
            selector: '<emplist></emplist>',
            templateUrl: 'app/Employee/employee.list.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], employeeListComponent);
    return employeeListComponent;
}());
exports.employeeListComponent = employeeListComponent;
//# sourceMappingURL=employee.list.component.js.map