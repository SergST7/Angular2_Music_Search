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
import {ProfileComponent} from "./components/profile.component";
import {ProtectedComponent} from "./components/protected.component";

import {DataService} from "./services/data.service";
import {AuthService} from "./services/login.service";
import {LoginGuard} from "./guards/login.guard";

const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoginGuard] },
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
    LoginComponent,
    ProfileComponent,
    ProtectedComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService,
    AuthService,
    LoginGuard
  ]
})
export class AppModule { }
