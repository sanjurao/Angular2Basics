"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponet = /** @class */ (function () {
    function EmployeeComponet() {
        this.EmpFName = "sanju";
        this.EmpLName = "Rao";
        this.EmpGender = "Male";
        this.EmpAge = "29";
        this.columspan = "2";
        this.showDetails = false;
    }
    EmployeeComponet.prototype.toggle = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponet = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: "app/Employee/employee.componet.html"
        })
    ], EmployeeComponet);
    return EmployeeComponet;
}());
exports.EmployeeComponet = EmployeeComponet;
//# sourceMappingURL=employee.component.js.map