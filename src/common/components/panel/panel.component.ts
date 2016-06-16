import {Component} from "@angular/core";
@Component({
    selector: "panel",
    styles: [require("./panel.component.scss")],
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"></h3>
            </div>
            <div class="panel-body">
            </div>
        </div>
    `
})
export class Panel {
}