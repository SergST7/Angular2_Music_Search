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
import {AlbumComponent} from "./components/album.component";
import {LoginComponent} from "./components/login.component";
import {ProfileComponent} from "./components/profile.component";
import {ProtectedComponent} from "./components/protected.component";
import {HomeComponent} from "./components/home.component";
import {ProductComponent} from "./components/nested/product.component";
import {MainProductComponent} from "./components/nested/main.product.component";

import {DataService} from "./services/data.service";
import {AuthService} from "./services/login.service";
import {LoginGuard} from "./guards/login.guard";

const productRoutes: Routes = [
  // {path: '', redirectTo: 'main'},
  {path: 'main', component: MainProductComponent }
];

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoginGuard] },
  { path: 'product', component: ProductComponent, children: productRoutes },
];

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TrackComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent,
    ProfileComponent,
    ProtectedComponent,
    ProductComponent,
    MainProductComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService,
    AuthService,
    LoginGuard
  ]
})
export class AppModule { }
