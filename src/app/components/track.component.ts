/**
 * Created by SergST on 01.03.2017.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'my-track',
  template: `
  <h1>Track Component</h1>
    <div *ngIf="track">
      <h1>{{ track.name }}</h1>
        <a href (click)="back()">Back</a>
`
})
export class TrackComponent  { }

