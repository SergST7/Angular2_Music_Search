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
  selector: 'artist',
  template: `
  <h2>Artist</h2>
    <div *ngIf="artist">
      <h1>{{ artist.name }}</h1>
      <div  *ngIf="artist.images.length">
        <img class="img-rounded img-responsive center-block" src="{{ artist.images[0].url }}">
      </div>
      <div>
         <button type="button" class="btn btn-primary" (click)="back()">Back</button>
       </div>
  </div>
`
})
export class ArtistComponent implements  OnInit{
  id: string;
  artist: Object;

  constructor ( public dataService: DataService,
                public location: Location,
                public route: ActivatedRoute){

    route.params.subscribe(params => {this.id = params['id']})
  }

  ngOnInit(){
    this.dataService
      .getArtist(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.artist = res;
      });
  }

  back(){
    this.location.back();
  }
}