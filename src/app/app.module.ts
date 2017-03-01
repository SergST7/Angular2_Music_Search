import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import {
  Routes,
  RouterModule
} from "@angular/router";

import { AppComponent }  from './components/app.component';
import { SearchComponent }  from './components/search.component';
import {TrackComponent} from "./components/track.component";

import {DataService} from "./services/data.service";



const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'track/:id', component: TrackComponent },
];

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService
  ]
})
export class AppModule { }
