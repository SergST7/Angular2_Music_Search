/**
 * Created by SergST on 07.03.2017.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class LargeService {
  run(): string {
    console.log('Large window...');
    return 'Large window API'
  }
}