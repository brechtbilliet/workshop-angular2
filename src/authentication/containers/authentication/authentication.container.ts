import {Component} from "@angular/core";
@Component({
    selector: "authentication",
    directives: [],
    template: `
       <div class="container">
           <panel>
               <login></login>
               <register></register>
               <a href="javascript:void(0)">I don't have an account yet</a>
               <a href="javascript:void(0)">I have an account already</a>
           </panel>
       </div>
      `
})
export class Authentication {

}