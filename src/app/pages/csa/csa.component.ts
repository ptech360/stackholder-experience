import {Component} from '@angular/core';
import { CustomHttpService } from "../shared/shared.service";
import { StorageService } from "../shared/common.service";
import { Router } from "@angular/router";

@Component({
  selector:'csa',
  templateUrl:'./csa.component.html',
  styleUrls:['./csa.component.css'],
  providers:[CustomHttpService,StorageService]
})
export class CSAComponent{
  userDetails:string;
  constructor(public storage:StorageService,private router: Router){
    this.userDetails = this.storage.getData('userDetails');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}