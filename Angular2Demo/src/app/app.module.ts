import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponet } from './Employee/employee.component';
import { employeeListComponent } from './Employee/employee.list.component';
import { importExpr } from '../../node_modules/@angular/compiler/src/output/output_ast';
import { EmployeeCountComponent } from './Employee/employee.count.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponet, employeeListComponent, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
