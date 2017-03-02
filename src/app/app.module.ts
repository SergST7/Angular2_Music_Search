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
import {ArtistComponent} from "./components/artist.component";
import {LoginComponent} from "./components/login.component";

import {DataService} from "./services/data.service";
import {AuthService} from "./services/login.service";



const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'artists/:id', component: ArtistComponent },
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
    TrackComponent,
    ArtistComponent,
    LoginComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService,
    AuthService
  ]
})
export class AppModule { }
