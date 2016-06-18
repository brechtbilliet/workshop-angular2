import {Component} from "@angular/core";
import {ApplicationState} from "../../state/ApplicationState";
import {Store} from "@ngrx/store";
import {CONTAINER_COLLAPSABLESIDEBAR_TOGGLE} from "../../actionTypes";
@Component({
    selector: "collapsable-sidebar",
    styles: [require("./collapsable-sidebar.container.scss")],
    template: `
        <div class="collapsable-part" [class.is-collapsed]="isCollapsed$|async">
            <button class="btn btn-primary btn-collapsable" (click)="toggle()">
                <i class="fa" [class.fa-chevron-right]="isCollapsed$| async" 
                    [class.fa-chevron-left]="(isCollapsed$| async) === false"></i>
            </button>
            <ng-content *ngIf="(isCollapsed$| async) === false"></ng-content>
        </div>
    `
})
export class CollapsableSidebar {
    public isCollapsed$ = this.store.select(state => state.containers.collapsableSidebar.isCollapsed);

    constructor(private store: Store<ApplicationState>) {

    }

    public toggle(): void {
        this.store.dispatch({type: CONTAINER_COLLAPSABLESIDEBAR_TOGGLE});
    }
}
