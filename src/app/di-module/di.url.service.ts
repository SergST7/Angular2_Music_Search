/**
 * Created by SergST on 07.03.2017.
 */

import {Injectable, Inject} from "@angular/core";

export const API_URL: string = 'API_URL';

@Injectable()
export class UrlService {
  constructor(@Inject(API_URL) private apiUrl: string){
  }

  get(): string {
    console.log(`URL: ${this.apiUrl}/endpoint `);
    return `${this.apiUrl}/endpoint`
  }
}