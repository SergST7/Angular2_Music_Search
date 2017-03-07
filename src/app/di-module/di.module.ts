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

@Component({
  selector: 'di-main',
  template: `
  <h1>Hello DI</h1>
     <di-simple-api></di-simple-api>
     <di-param-api></di-param-api>
     <di-complex-api></di-complex-api>
`
})
export class DiMainComponent{}

@NgModule({
  declarations: [
    DiMainComponent,
    SimpleApiComponent,
    ParamComponent,
    DiComplexComponent
  ],
  imports: [CommonModule ],

  exports: [DiMainComponent]
})
export class DependencyInjectionsModule{}