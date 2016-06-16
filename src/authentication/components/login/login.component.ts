import {Component, Output} from "@angular/core";
import {EventEmitter} from "@angular/router-deprecated/src/facade/async";
import {Credentials} from "../../types/Credentials";
@Component({
    selector: "login",
    styles: [require("./login.component.scss")],
    template: `
        <h1>Login</h1>
        <button class="btn btn-primary" (click)="onSubmit()">Login</button>

       `
})
export class Login {
    @Output()
    public authenticate: EventEmitter<Credentials>;

    constructor() {
        this.authenticate = new EventEmitter();
    }

    public onSubmit(): void {
        this.authenticate.emit({login: "johndoe", password: "testtest"});
    }
}