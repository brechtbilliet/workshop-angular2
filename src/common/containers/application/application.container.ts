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
import {Account} from "../../../authentication/types/Account";
import {ApplicationState} from "../../state/ApplicationState";
import {Store} from "@ngrx/store";
import {Authentication} from "../../../authentication/containers/authentication/authentication.container";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
@Component({
    selector: "application",
    providers: [Title, AuthenticationService],
    directives: [ROUTER_DIRECTIVES, Navbar, Authentication],
    encapsulation: ViewEncapsulation.None,
    styles: [require("./application.container.scss")],
    template: `
        <navbar [account]="account" (logout)="logout()" *ngIf="isAuthenticated"></navbar>
        <authentication *ngIf="!isAuthenticated"></authentication>
        <router-outlet *ngIf="isAuthenticated"></router-outlet>
        <spinner></spinner>

    `
})
@RouteConfig([
    {path: "/", name: "Root", redirectTo: ["MyWines"]},
    {path: "/stock", name: "MyWines", component: StockPage},
    {path: "/about", name: "About", component: AboutPage}
])
export class WineCellarApp {

    constructor(private title: Title, private authenticationService: AuthenticationService) {
        this.title.setTitle("Winecellar application");
    }
    public isAuthenticated: boolean = false;
    public account: Account = {firstName: "Brecht", lastName: "Billiet", login: "brechtbilliet"}

    public logout(): void {
        this.authenticationService.logout();
    }
}
