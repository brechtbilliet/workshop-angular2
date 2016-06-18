import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../common/state/ApplicationState";
import {Wine} from "../entities/Wine";
import {CONTAINER_EDITSTOCKPAGE_CLEAR_WINE, CONTAINER_EDITSTOCKPAGE_SET_WINE} from "../../common/actionTypes";
import {StockService} from "../services/stock.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class EditStockPageSandbox {
    public editWine$ = this.store.select(state => state.containers.editStockPage.wine);

    constructor(private store: Store<ApplicationState>, private StockService: StockService) {
    }

    public updateWine(id: string, wine: Wine): void {
        this.StockService.update(id, wine);
    }

    public clearWine(): void {
        this.store.dispatch({type: CONTAINER_EDITSTOCKPAGE_CLEAR_WINE});
    }

    public fetchWine(id: string): Observable<Wine> {
        return this.StockService.fetchWine(id);
    }

    public setWine(wine: Wine): void {
        this.store.dispatch({type: CONTAINER_EDITSTOCKPAGE_SET_WINE, payload: wine});
    }
}
