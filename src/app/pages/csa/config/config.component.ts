import {Component} from '@angular/core';
import {DataService} from '../csa.service';
@Component({
  selector:'config',
  templateUrl:'./config.component.html',
  styleUrls:['./config.component.css']
})
export class ConfigComponent{
  constructor(public ds:DataService){

  }

  public setUnit(value:any){
    this.ds.putAttribute('unit',value);
  }

  public next(){
    
  }
}