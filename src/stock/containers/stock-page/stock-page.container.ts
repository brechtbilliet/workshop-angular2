import {Component} from "@angular/core";
import {Panel} from "../../../common/components/panel/panel.component";
import {NumberPicker} from "../../../common/components/number-picker/number-picker.component";
import {Rating} from "../../../common/components/rating/rating.component";
import {Spinner} from "../../../common/components/spinner/spinner.component";
@Component({
    selector: "stock-page",
    directives: [Panel, Spinner, Rating, NumberPicker],
    template: `
        <default-page>
            <collapsable-sidebar>
                <favorite-wines>
                </favorite-wines>
            </collapsable-sidebar>
            <main>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="input-group">
                            <input type="text" class="form-control input-lg" />
                            <span class="input-group-addon"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <a  class="btn btn-primary btn-lg btn-block">
                            <i class="fa fa-plus-circle"></i>&nbsp;Add
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h2>
                            <i class="fa fa-user"></i>&nbsp;My wines 
                            <span class="badge badge-primary">44</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <wine-results>
                        </wine-results>
                    </div>
                </div>
                
                <panel [header]="'Just a test'">
                    <rating (setRate)="onSetRating($event)" [rating]="3"></rating>
                    <number-picker [amount]="4" (setAmount)="onSetStock($event)"></number-picker>
                    <spinner [spin]="true"></spinner>
                </panel>
            </main>
        </default-page>
     `
})
export class StockPage {
    public onSetRating(rating: number): void {
        alert('set rating: ' + rating);
    }

    public onSetStock(stock: number): void {
        alert('set stock: ' + stock);
    }
}
