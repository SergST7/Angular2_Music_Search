/**
 * Created by SergST on 03.03.2017.
 */

import {
  Component,
  OnInit
} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

import {DataService} from "../services/data.service";

@Component({
  selector: 'album',
  template: `
  <h2>Album</h2>
    <div *ngIf="album">
      <h1>{{ album.name }}</h1>
      <div *ngIf="album.artists.length">
          <h5> Artist List</h5>
              <span *ngFor=" let art of album.artists">
                <a [routerLink]="['/artists', art.id]">{{ art.name }}, </a>
              </span>
      </div>
      <div  *ngIf="album.images.length">
        <img class="img-rounded img-responsive center-block" src="{{ album.images[0].url }}">
      </div>
      <div *ngIf="album.tracks.items.length">
          <h5> Tracks List</h5>
              <p *ngFor=" let t of album.tracks.items">
                <a [routerLink]="['/track', t.id]">{{ t.name }}, </a>
              </p>
      </div>
      
      <div>
         <button type="button" class="btn btn-primary" (click)="back()">Back</button>
       </div>
  </div>
`
})
export class AlbumComponent implements  OnInit{
  id: string;
  album: Object;

  constructor ( public dataService: DataService,
                public location: Location,
                public route: ActivatedRoute){

    route.params.subscribe(params => {this.id = params['id']})
  }

  ngOnInit(){
    this.dataService
      .getAlbum(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.album = res;
      });
  }

  back(){
    this.location.back();
  }
}