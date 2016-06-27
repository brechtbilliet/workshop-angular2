import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../common/state/ApplicationState";
import {Wine} from "../entities/Wine";
import {StockService} from "../services/stock.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class EditStockPageSandbox {
    constructor(private store: Store<ApplicationState>, private StockService: StockService) {
    }

    public updateWine(id: string, wine: Wine): void {
        this.StockService.update(id, wine);
    }

    public fetchWine(id: string): Observable<Wine> {
        return this.StockService.fetchWine(id);
    }
}
