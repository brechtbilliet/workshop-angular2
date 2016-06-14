import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Component, ChangeDetectionStrategy} from "@angular/core";
@Component({
    selector: "navbar",
    directives: [ROUTER_DIRECTIVES],
    styles: [require("./navbar.component.scss")],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" 
                        data-toggle="collapse" 
                        data-target="#navbar" 
                        aria-expanded="false" 
                        aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['MyWines']"><i class="fa fa-glass"></i>&nbsp;Wine cellar</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['MyWines']"><i class="fa fa-user"></i>&nbsp;My wines</a></li>
                        <li><a [routerLink]="['About']" ><i class="fa fa-info-circle"></i>&nbsp;About</a></li>
                    </ul>
                </div>
            </div>
        </nav>`
})
export class Navbar {
}