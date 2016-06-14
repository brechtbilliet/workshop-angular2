import {Component} from "@angular/core";
@Component({
    selector: "stock-page",
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
            </main>
        </default-page>
     `
})
export class StockPage {

}
