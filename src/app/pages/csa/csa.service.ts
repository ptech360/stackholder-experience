import {Injectable} from '@angular/core';
@Injectable()
export class DataService{
  sourceObject:any={};
  constructor(){

  }

  putAttribute(key:any,value:any){
    this.sourceObject[key] = value;
  }

  getSourceObject(){
    return this.sourceObject;
  }

}