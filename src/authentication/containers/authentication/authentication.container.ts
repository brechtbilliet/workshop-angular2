import {Component} from "@angular/core";
import {Panel} from "../../../common/components/panel/panel.component";
import {Register} from "../../components/register/register.component";
import {Login} from "../../components/login/login.component";
@Component({
    selector: "authentication",
    directives: [Panel, Login, Register],
    providers: [],
    template: `
    <div class="container">
        <panel [header]="'You are not authenticated!'">
            <button class="btn btn-danger">Logout</button>
            <login></login>
            <register></register>
            <a href="javascript:void(0)">I don't have an account yet</a>
            <a href="javascript:void(0)">I have an account already</a>
        </panel>
    </div>
      `
})
export class Authentication {
}