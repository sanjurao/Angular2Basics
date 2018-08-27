import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'employee-count',
    templateUrl: 'app/Employee/employee.count.component.html'
})

export class EmployeeCountComponent {

    SelectedRadioButtonval: string = 'All';

    @Output()
    RadioButtonEvent : EventEmitter<string> = new EventEmitter<string>(); 

    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    OnChangeRadioBtnEvent() {
        this.RadioButtonEvent.emit(this.SelectedRadioButtonval);
        console.log(this.SelectedRadioButtonval);
    } 
}
