import {Component} from '@angular/core';
import { DEAuditService } from "./de.service";
@Component({
  selector:'de',
  templateUrl:'./de.component.html',
  styleUrls:['./de.component.css'],
  providers:[DEAuditService]
})
export class DEComponent{
  audits: any[];
  constructor(public des: DEAuditService) {
    this.getAudits();
  }
  getAudits(){
    this.des.getAudits().subscribe((response:any)=>{
      if(response.status == 204){
        this.audits = [];
      }else{
      this.audits = response;
    }
    })
  }
}