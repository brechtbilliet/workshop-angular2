import {Component, ChangeDetectionStrategy} from "@angular/core";
@Component({
    selector: "form-group-textarea",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="form-group has-feedback">
            <label class="col-sm-4 control-label">Fake label</label>
             <div class="col-sm-8">
                <textarea
                    class="form-control input-lg" 
                    placeholder="fake placeholder"></textarea>
                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        </div>
    `
})
export class FormGroupTextarea {
}