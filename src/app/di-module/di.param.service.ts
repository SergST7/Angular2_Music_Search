/**
 * Created by SergST on 07.03.2017.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class ParamService {
  constructor(private name: string){
    console.log('Param service started with ', name);
  }

  get(): string {
    return this.name
  }
}