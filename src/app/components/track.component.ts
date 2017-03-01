/**
 * Created by SergST on 01.03.2017.
 */

import {
  Component,
  OnInit
} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

import {DataService} from "../services/data.service";

@Component({
  selector: 'my-track',
  template: `
  <h1>Track Component</h1>
    <div *ngIf="track">
      <h1>{{ track.name }}</h1>
        <a href (click)="back()">Back</a>
   </div>
`
})
export class TrackComponent implements  OnInit{
  id: string;
  track: Object;

  constructor ( public dataService: DataService,
                public location: Location,
                public route: ActivatedRoute){

    route.params.subscribe(params => {this.id = params['id']})
  }

  ngOnInit(){
    this.dataService
      .getTrack(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.track = res;
      });
  }

  back(){
    this.location.back();
  }
}

