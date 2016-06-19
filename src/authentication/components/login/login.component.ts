import {Component, Output} from "@angular/core";
import {EventEmitter} from "@angular/router-deprecated/src/facade/async";
import {Credentials} from "../../types/Credentials";
@Component({
    selector: "login",
    styles: [require("./login.component.scss")],
    template: `
        <h1>Login</h1>
        <button class="btn btn-primary">Login</button>

       `
})
export class Login {
}