/**
 * Created by SergST on 07.03.2017.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class SmallService {
  run(): string {
    console.log('Small window...');
    return 'Small window API'
  }
}