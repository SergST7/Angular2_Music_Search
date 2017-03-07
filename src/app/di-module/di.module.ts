/**
 * Created by SergST on 06.03.2017.
 */

import {
  NgModule,
  Component
} from "@angular/core";

@Component({
  selector: 'di-main',
  template: `<h1>Hello DI</h1>`
})
export class DiMainComponent{}


@NgModule({
  declarations: [DiMainComponent],
  imports: [],
  exports: [DiMainComponent]
})
export class DependencyInjectionsModule{}