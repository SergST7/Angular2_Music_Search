/**
 * Created by SergST on 06.03.2017.
 */

import {
  NgModule,
  Component
} from "@angular/core";
import {CommonModule} from "@angular/common";

//components
import {SimpleApiComponent} from "./di.simple.component";
import {ParamComponent} from "./di.param.component";
import {DiComplexComponent} from "./complex/di.complex.component";
import {UrlApiComponent} from "./di.url.component";

//services
import {API_URL, UrlService} from "./di.url.service";

@Component({
  selector: 'di-main',
  template: `
  <h1>Hello DI</h1>
     <di-simple-api></di-simple-api>
     <di-param-api></di-param-api>
     <di-complex-api></di-complex-api>
     <di-url></di-url>
`
})
export class DiMainComponent{}

const isProduction: boolean = true;

@NgModule({
  declarations: [
    DiMainComponent,
    SimpleApiComponent,
    ParamComponent,
    DiComplexComponent,
    UrlApiComponent
  ],
  imports: [CommonModule ],
  exports: [DiMainComponent],
  providers: [
    UrlService,
    {provide: API_URL, useValue: isProduction ?
      'https://production-api.sample.com' :
      'http://dev-api.sample.com'
    }
  ]
})
export class DependencyInjectionsModule{}