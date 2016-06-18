import {Component, OnDestroy, OnInit} from "@angular/core";
import {Main} from "../../../common/components/main/main.component";
import {DefaultPage} from "../../../common/components/default-page/default-page.component";
import {ROUTER_DIRECTIVES, RouteParams, Router} from "@angular/router-deprecated";
import {DetailWineForm} from "../../components/detail-wine-form/detail-wine-form.component";
import {Wine} from "../../entities/Wine";
import {StockService} from "../../services/stock.service";
import {CONTAINER_EDITSTOCKPAGE_CLEAR_WINE, CONTAINER_EDITSTOCKPAGE_SET_WINE} from "../../../common/actionTypes";
import {ApplicationState} from "../../../common/state/ApplicationState";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Rx";
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
             <div class="row">
                <detail-wine-form [wine]="editWine$|async" *ngIf="editWine$|async" (onSave)="onSave($event)"></detail-wine-form>
            </div>
        </main>
    </default-page>
     `
})
export class EditStockPage implements OnDestroy {
    public get id(): string {
        return this.routeParams.get("id");
    }

    public editWine$: Observable<Wine> = this.store.select(state => state.containers.editStockPage.wine);

    constructor(public stockService: StockService,
                private store: Store<ApplicationState>,
                private routeParams: RouteParams,
                private router: Router) {
        this.stockService.fetchWine(this.id).subscribe((wine: Wine) => {
            this.store.dispatch({
                type: CONTAINER_EDITSTOCKPAGE_SET_WINE,
                payload: wine
            });
        });
    }

    public onSave(wine: Wine): void {
        this.stockService.update(this.id, wine);
        this.router.navigateByUrl("/stock");
    }

    public ngOnDestroy(): void {
        this.store.dispatch({type: CONTAINER_EDITSTOCKPAGE_CLEAR_WINE});
    }
}