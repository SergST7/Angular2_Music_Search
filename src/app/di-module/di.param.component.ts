/**
 * Created by SergST on 07.03.2017.
 */

import {Component} from "@angular/core";
import {ApiSimpleService} from "./di.simple.service";
import {ParamService} from "./di.param.service";

@Component({
  selector: 'di-param-api',
  template: `
<button (click)="invokeApi()">Get Value</button>
<div *ngIf="title">Simple service return <b>{{ title }}</b></div>
<div *ngIf="param">Param service return <b>{{ param }}</b></div>
`,
  providers: [
    {provide: ApiSimpleService, useClass: ApiSimpleService },
    {provide: ParamService, useFactory: (): ParamService => new ParamService('SERG') }
  ]
})
export class ParamComponent{
  title: string;
  param: string

  constructor(private apiSRV: ApiSimpleService,
              private paramSRV: ParamService){
  }

  invokeApi(){
    this.title = this.apiSRV.get();
    this.param = this.paramSRV.get();

  }
}
