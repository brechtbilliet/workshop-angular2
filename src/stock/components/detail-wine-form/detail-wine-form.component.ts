import {Component} from "@angular/core";
@Component({
    selector: "detail-wine-form",
    template: `
        <form class="form-horizontal col-sm-12">
            <button type="submit" class="btn btn-primary btn-lg">
                <i class="fa fa-save"></i>&nbsp;Save wine
            </button>
            <a class="btn btn-warning btn-lg"><i class="fa fa-undo"></i>&nbsp;Cancel</a>
        </form>
     `
})
export class DetailWineForm {

}