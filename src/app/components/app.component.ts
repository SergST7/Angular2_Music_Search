import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <search></search>
`,
})
export class AppComponent  { name = 'Angular'; }
