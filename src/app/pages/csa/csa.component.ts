import {Component} from '@angular/core';
import { CustomHttpService } from "../shared/shared.service";

@Component({
  selector:'csa',
  templateUrl:'./csa.component.html',
  styleUrls:['./csa.component.css'],
  providers:[CustomHttpService]
})
export class CSAComponent{
  constructor(){
    
  }
}