/**
 * Created by SergST on 28.02.2017.
 */

import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../services/data.service";



@Component({
  selector: 'search',
  template: `
<h1>Search</h1>
<div class="row">
  <div class="col-md-offset-2 col-md-8">
    <div  class="input-group">
      <input type="text"
             class="form-control" 
             placeholder="Search" 
             autofocus
             #newquery
             [value]="query"
             (keydown.enter)="submit(newquery.value)">
           
      <span class="input-group-btn">
         <button class="btn btn-default" type="button" (click)="submit(newquery.value)">Go!</button>
       </span>
    </div>
  </div>
</div>
<div *ngIf="results">
  <div *ngIf="!results.length">
    No tracks were found with the term '{{ query }}'
  </div>
   <div *ngIf="results.length">
    <h2>Results</h2>
    <div class="row row-flex">
      <div class="col-md-4 col-sm-6" *ngFor="let t of results">
        <div class="thumbnail">
          <div class="content">
            <img class="img-responsive" src="{{ t.album.images[0].url }}" alt="album">
            <div class="caption">
              <h5> Artist List</h5>
              <span *ngFor=" let art of t.artists">
                <a [routerLink]="['/artists', art.id]">{{ art.name }}, </a>
              </span>
            </div>
            <p>             
              <a [routerLink]="['/track', t.id]"><span>Track - </span>{{ t.name }}, </a>
            </p>
            <div class="attribution">
               <h4>
                  <a [routerLink]="['/album', t.album.id]"><span>Album - </span>{{ t.album.name }}, </a>
               </h4>
            </div>         
          </div>
        </div>    
      </div>
    </div>
  </div>
</div>
`
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor (private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router){

    this.route.queryParams.subscribe(params => {this.query = params['query'] || 'кино'})
  }

  ngOnInit (){
    this.search()
  }

  submit(query: string): void{
    this.router.navigate(['search'], { queryParams: { query: query }})
      .then(_ => this.search())
  }

  search(): void {
    // this.query = query;
    console.log('query: ', this.query);
    if (!this.query) {
      return
    }

    this.dataService.searchByTrack(this.query).subscribe((res: any)=> this.retrieveResults(res))
  }

  retrieveResults (res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
      console.log(this.results);
    }
  }


}

