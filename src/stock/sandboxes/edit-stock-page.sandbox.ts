import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../common/state/ApplicationState";
import {Wine} from "../entities/Wine";
import {StockService} from "../services/stock.service";
import {Observable} from "rxjs/Rx";
import {clearWine, setWine} from "../../common/actionCreators";

@Injectable()
export class EditStockPageSandbox {
    public editWine$ = this.store.select(state => state.containers.editStockPage.wine);

    constructor(private store: Store<ApplicationState>, private StockService: StockService) {
    }

    public updateWine(id: string, wine: Wine): void {
        this.StockService.update(id, wine);
    }

    public clearWine(): void {
        this.store.dispatch(clearWine());
    }

    public fetchWine(id: string): Observable<Wine> {
        return this.StockService.fetchWine(id);
    }

    public setWine(wine: Wine): void {
        this.store.dispatch(setWine(wine));
    }
}
