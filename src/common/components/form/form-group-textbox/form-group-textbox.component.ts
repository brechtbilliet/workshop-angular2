import {Component} from "@angular/core";
@Component({
    selector: "form-group-textbox",
    template: `
        <div class="form-group has-feedback" >
            <label class="col-sm-4 control-label">Fake label</label>
             <div class="col-sm-8">
                <input type="text" 
                    class="form-control input-lg" 
                    placeholder="fake placeholder"/>
                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        </div>
    `
})
export class FormGroupTextbox {
}