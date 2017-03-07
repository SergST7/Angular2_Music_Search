/**
 * Created by SergST on 07.03.2017.
 */

import {Component} from "@angular/core";
import {ApiSimpleService} from "./di.simple.service";

@Component({
  selector: 'di-simple-api',
  template: `
<button (click)="invokeApi()">Invoke simple API</button>
<div *ngIf="title">{{ title }}</div>`,
  providers: [
    {provide: ApiSimpleService, useClass: ApiSimpleService }
  ]
})
export class SimpleApiComponent{
  title: string;

  constructor(private apiSRV: ApiSimpleService){
  }

  invokeApi(){
    this.title = this.apiSRV.get();
  }
}
