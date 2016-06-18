import {Component, ChangeDetectionStrategy} from "@angular/core";
@Component({
    selector: "form-group-password",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="form-group has-feedback">
             <label class="col-sm-4 control-label">fake label</label>
             <div class="col-sm-8">
                <input type="password" 
                    class="form-control input-lg" 
                    placeholder="fake placeholder"/>
                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        </div>
    `
})
export class FormGroupPassword {
}