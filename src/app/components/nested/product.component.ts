/**
 * Created by SergST on 03.03.2017.
 */

import {Component} from "@angular/core";


@Component({
  selector: 'product',
  template:`
  <h1>Product Component</h1>
  <a href [routerLink]="['main']">Main</a>
  <router-outlet></router-outlet>
`

})
export class ProductComponent{}
