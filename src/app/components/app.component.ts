import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <div class="container">
            <router-outlet></router-outlet>
            </div>
`,
})
export class AppComponent  { name = 'Angular'; }
