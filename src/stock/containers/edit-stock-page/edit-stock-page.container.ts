import {Component} from "@angular/core";
import {Main} from "../../../common/components/main/main.component";
import {DefaultPage} from "../../../common/components/default-page/default-page.component";
import {ROUTER_DIRECTIVES, RouteParams, Router} from "@angular/router-deprecated";
import {DetailWineForm} from "../../components/detail-wine-form/detail-wine-form.component";
import {Wine} from "../../entities/Wine";
import {StockService} from "../../services/stock.service";
@Component({
    selector: "edit-stock-page",
    providers: [StockService],
    directives: [ROUTER_DIRECTIVES, DetailWineForm, DefaultPage, Main],
    template: `
    <default-page>
        <main>
            <div class="row">
                <div class="col-sm-12">
                    <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
                </div>
             </div>
             <div class="row" *ngIf="(editWine$|async)">
                <detail-wine-form [wine]="editWine$|async" (onSave)="onSave($event)"></detail-wine-form>
            </div>
        </main>
    </default-page>
     `
})
export class EditStockPage {
    public id = this.routeParams.get("id");
    public editWine$ = this.stockService.fetchWine(this.id).publishLast().refCount();

    constructor(public stockService: StockService,
                private routeParams: RouteParams,
                private router: Router) {
    }

    public onSave(wine: Wine): void {
        this.stockService.update(this.id, wine);
        this.router.navigateByUrl("/stock");
    }
}