import {Component} from "@angular/core";

@Component({
    selector: "wine-search",
    styles: [require("./wine-search.container.scss")],
    template: `
        <div class="form-group has-feedback">
            <label for="searchInput" class="col-sm-4 control-label">
                Name (*)
            </label>
            <div class="col-sm-8">
                <input type="text" class="form-control input-lg" id="searchInput" 
                    autocomplete="off" placeholder="Name"/>
                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <ul class="wine-search-results">
                    <li>
                        <img src="fakeurl" alt=""/> Fake wine
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class WineSearch {

}