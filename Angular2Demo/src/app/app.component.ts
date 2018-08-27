import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    templateUrl:"app/app.component.html"
    //template: `<my-employee></my-employee>`
})
export class AppComponent  {
    pageHeader: string = 'Employee Details !';
    firstName: string = "sanju";
    lastName: string = "Rao 1";
    name: string = "sanju";
    
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    };
    OnClick(): void {
        console.log("Clicked Me")
    }
    
}
