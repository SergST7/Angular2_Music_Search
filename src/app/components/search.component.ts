/**
 * Created by SergST on 28.02.2017.
 */

import { Component } from '@angular/core';
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
    <h1>Results</h1>
  </div>
</div>
`
})
export class SearchComponent{
  query: string;
  results: Object;

  constructor (private dataService: DataService,
                private  route: ActivatedRoute){

    this.route.queryParams.subscribe(params => {this.query = params['query'] || ''})
  }

  submit(query: string): void {
    this.query = query;
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

