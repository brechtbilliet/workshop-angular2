import {Component} from "@angular/core";
@Component({
    selector: "register",
    styles: [require("./register.component.scss")],
    template: `
          <form class="form-horizontal">
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                    <i class="fa fa-user"></i>&nbsp;Sign up
                </button>
        </form>
       `
})
export class Register {

}