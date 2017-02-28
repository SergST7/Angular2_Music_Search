/**
 * Created by SergST on 28.02.2017.
 */

import {Http} from '@angular/http';


export class DataService {
  constructor (public http: Http){};

  searchByTrack(query: String){
    let params = [
      'q=${query}',
      'type=track'
    ].join('&');
    let queryUrl = 'https://api.spotify.com/v1/search?${params}';
    return this.http.request(queryUrl).map(res => res.json())
  }
}
