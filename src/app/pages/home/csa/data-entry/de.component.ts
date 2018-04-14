import {Component, OnInit} from '@angular/core';
import { AuditService } from '../audits/audits.service';

declare let $:any;

@Component({
 selector:'data-entry',
 templateUrl:'./de.component.html',
 styleUrls:['./../audits/audits.component.css'],
 providers:[AuditService]
})
export class DataEntryComponent implements OnInit{
 selectedEmployees(arg0: any, arg1: any): any {
  throw new Error("Method not implemented.");
 }
 selectedUnit: any;
 audits: any[] = [];
 constructor(public as:AuditService){

 }

 ngOnInit(){
  this.getAudits();
 }

 getAudits(){
  this.as.getAudits().subscribe((response:any)=>{
    if(response.status == 204){
      this.audits = [];
    }else{
    this.audits = response;
  }
  })
}

employees:any[];
getEmployees(unitId:any){
 this.selectedUnit = unitId;
  this.as.getEmployees(unitId).subscribe((response:any)=>{
    if(response.status == 204){
      this.employees = [];
    }else{
      this.employees = response;
    }
    
  })
}

assignUnit(){
 this.as.assignUnit(this.selectedUnit,this.selectedEmployees).subscribe((response:any)=>{
   $('#myModal').modal('hide');
 },(error:any)=>{
   alert("This unit can not be assigned caused either already assigned to this Employee or other issue");
 })
}
}