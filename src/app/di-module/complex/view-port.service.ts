/**
 * Created by SergST on 07.03.2017.
 */

import {Injectable} from "@angular/core";
import {SmallService} from "./di.small.service";
import {LargeService} from "./di.large.service";

@Injectable()
export class ViewPortService {
  determineService(): any {
    let w: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if ( w < 800 ){
      return new SmallService()
    }
    return new LargeService()
  }
}