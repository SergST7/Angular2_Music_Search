/**
 * Created by SergST on 07.03.2017.
 */

import {Component} from "@angular/core";
import {UrlService, API_URL} from "./di.url.service";



@Component({
  selector: 'di-url',
  template: `
<button (click)="invokeApi()">Get URL</button>
<div *ngIf="title">{{ title }}</div>`,

})
export class UrlApiComponent{
  title: string;

  constructor(private apiSRV: UrlService){
  }

  invokeApi(){
    this.title = this.apiSRV.get();
  }
}
