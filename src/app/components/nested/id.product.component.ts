/**
 * Created by SergST on 03.03.2017.
 */

import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'product-id',
  template:`
  <h1>Product id component</h1>
  <div>Product #{{id}}</div>
`
})
export class IdProductComponent{
  id: string;

  constructor(public route: ActivatedRoute){
    this.route.params.subscribe(params => this.id = params['id'])
  }
}
