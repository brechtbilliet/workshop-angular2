import {Component, Input} from "@angular/core";
@Component({
    selector: "rating",
    styles: [require("./rating.component.scss")],
    template: `
        <i class="fa fa-star rating"></i>
    `
})
export class Rating {
    @Input() public rating:number;

}