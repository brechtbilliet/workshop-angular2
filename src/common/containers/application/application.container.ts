import {Title} from "@angular/platform-browser";
import {Component, ViewEncapsulation} from "@angular/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";
import {StockPage} from "../../../stock/containers/stock-page/stock-page.container";
import {AboutPage} from "../../../about/containers/about-page/about-page.container";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Navbar} from "../../components/navbar/navbar.component";
import {ApplicationState} from "../../state/ApplicationState";
import {Store} from "@ngrx/store";
import {Authentication} from "../../../authentication/containers/authentication/authentication.container";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {BusyHandlerService} from "../../services/busyHandler.service";
import {Spinner} from "../../components/spinner/spinner.component";
import {StockService} from "../../../stock/services/stock.service";
@Component({
    selector: "application",
    providers: [Title, AuthenticationService, BusyHandlerService, StockService],
    directives: [ROUTER_DIRECTIVES, Navbar, Authentication, Spinner],
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    template: `
        <navbar [account]="account$|async" (logout)="logout()" [hidden]="!(isAuthenticated$|async)"></navbar>
        <authentication *ngIf="!(isAuthenticated$|async)"></authentication>
        <router-outlet *ngIf="isAuthenticated$|async"></router-outlet>
        <spinner [spin]="isBusy$|async"></spinner>

    `
})
@RouteConfig([
    {path: "/", name: "Root", redirectTo: ["MyWines"]},
    {path: "/stock", name: "MyWines", component: StockPage},
    {path: "/about", name: "About", component: AboutPage}
])
export class WineCellarApp {
    public isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    public account$ = this.store.select(state => state.data.authentication.account);
    public isBusy$ = this.store.select(state => state.containers.application.isBusy);

    constructor(private title: Title, private authenticationService: AuthenticationService,
                private store: Store<ApplicationState>, private stockService: StockService) {
        this.title.setTitle("Winecellar application");
        authenticationService.checkInitialAuthentication();
        this.stockService.load();
    }


    public logout(): void {
        this.authenticationService.logout();
    }
}
