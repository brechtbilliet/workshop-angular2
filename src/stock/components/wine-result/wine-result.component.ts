import {Component} from "@angular/core";
@Component({
    selector: '[wineResult]',
    template: `
        <td><img src="fakeimage"></td>
        <td>wine name</td>
        <td>wine region</td>
        <td style="min-width:80px;">
            <number-picker ></number-picker>
        </td>
        <td>400</td>
        <td><rating></rating></td>
        <td>
            <div class="pull-right">
                <div class="btn-group">
                    <a class="btn btn-lg btn-primary">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <button class="btn btn-lg btn-danger"><i class="fa fa-trash-o"></i></button>
                </div>
            </div>
        </td>
    `
})
export class WineResult {

}
