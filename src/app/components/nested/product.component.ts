/**
 * Created by SergST on 03.03.2017.
 */

import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'product',
  template:`
  <h1>Product Component</h1>
  <p> Enter rote ID: </p>
    <div class="input-group col-md-6">
      <span class="input-group-addon" id="basic-addon1">ID</span>
      <input type="text" class="form-control" #id size="10" placeholder="route ID" aria-describedby="basic-addon1">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" (click)="goToRoute(id.value)">Go!</button>
      </span>
    </div>
  
  <ul class="nav nav-pills">
    <li role="presentation">
      <a href [routerLink]="['./main']">Main</a>
    </li>
    <li role="presentation">
      <a href [routerLink]="['./stat']">Statistic</a>
    </li>
  </ul>
  
  <div class="row">
    <div class="well">
      <router-outlet></router-outlet>
    </div>
  </div>
`

})
export class ProductComponent{

  constructor(private router: Router, private route: ActivatedRoute){};

  goToRoute (id: string): void{

    this.router.navigate(['./', id], {relativeTo: this.route})
  }
}
