import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import { AppComponent }  from './components/app.component';
import { SearchComponent }  from './components/search.component';

import {DataService} from "./services/data.service";


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService
  ]
})
export class AppModule { }
