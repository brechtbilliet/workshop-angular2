import {Component, Output} from "@angular/core";
import {EventEmitter} from "@angular/router-deprecated/src/facade/async";
import {Account} from "../../types/Account";
@Component({
    selector: "register",
    styles: [require("./register.component.scss")],
    template: `
        <h1>Register</h1>
        <button class="btn btn-primary" (click)="onSubmit()">Register</button>
       `
})
export class Register {
    @Output()
    public authenticate: EventEmitter<Account>;

    constructor() {
        this.authenticate = new EventEmitter();
    }

    public onSubmit(): void {
        this.authenticate.emit({firstName: "test", lastName: "tester", login: "testtester", password: ""});
    }
}