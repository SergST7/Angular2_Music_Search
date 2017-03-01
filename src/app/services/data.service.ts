/**
 * Created by SergST on 28.02.2017.
 */

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor (public http: Http){};

  getQuerystr(query: string, params?: string[]): Observable<any> {
    // let params = [
    //   `q=${query}`,
    //   'type=track'
    // ].join('&');
    let queryUrl: string = `${DataService.BASE_URL}${query}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join('&')}`;
    }
    return this.http.request(queryUrl).map((res: any) => res.json())
  }

  search(query: string, type: string): Observable<any[]> {
    return this.getQuerystr(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.getQuerystr(`/tracks/${id}`);
  }
}
