/**
 * Created by SergST on 07.03.2017.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class ApiSimpleService {
  get(): string {
    console.log('Getting resource from Simple API...');
    return 'simple API'
  }
}