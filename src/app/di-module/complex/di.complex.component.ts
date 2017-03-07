/**
 * Created by SergST on 07.03.2017.
 */

import {Component, Inject, ReflectiveInjector} from "@angular/core";
import {ApiSimpleService} from "../di.simple.service";
import {ViewPortService} from "./view-port.service";


@Component({
  selector: 'di-complex-api',
  template: `
<button (click)="invokeApi()">Invoke API</button>
<button (click)="useInject()">Use Injector</button>
<div *ngIf="title">Simple service return <b>{{ title }}</b></div>
<div *ngIf="alias">Alias service return <b>{{ alias }}</b></div>
<div *ngIf="size">Size service return <b>{{ size }}</b></div>
`,
  providers: [
    ViewPortService,
    {provide: ApiSimpleService, useClass: ApiSimpleService },
    {provide: 'AliasSimple', useExisting: ApiSimpleService },
    {provide: 'SizeSrv', useFactory: (viewport: any) => {
        return viewport.determineService()
      }, deps: [ViewPortService]
    }
  ]
})
export class DiComplexComponent{
  title: string;
  alias: string;
  size: string;

  constructor(private apiSRV: ApiSimpleService,
              @Inject('AliasSimple') private aliasSimple: ApiSimpleService,
              @Inject('SizeSrv') private sizeSrv: any){
  }

  invokeApi(){
    this.title = this.aliasSimple.get();
    this.alias = this.apiSRV.get();
    this.size = this.sizeSrv.run();
  }

  useInject(){
    let myInj: any = ReflectiveInjector.resolveAndCreate([
      ViewPortService,
      {provide: 'MyOtherService',
        useFactory: (viewport: any) => {
        return viewport.determineService()
      }, deps: [ViewPortService]}
    ]);

    let sizeService: any = myInj.get('MyOtherService');

    this.size = sizeService.run();
  }

}
