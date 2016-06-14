import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
@Component({
    selector: "application",
    providers: [Title],
    directives: [],
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    template: `
        <div>What a great app</div>
    `
})
export class WineCellarApp{

    constructor(private title: Title) {
        this.title.setTitle("Winecellar application");
    }
}
