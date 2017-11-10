import {Component} from '@angular/core';
import { AuditService } from "./audits.service";

declare let $:any;

@Component({
  selector:'audit',
  templateUrl:'./audits.component.html',
  styleUrls:['./audits.component.css'],
  providers:[AuditService]
})
export class AuditsComponent{
  audits:any[]=[]; 
  selectedEmployees:any;
  selectedUnit:any; 
  constructor(public as:AuditService){
    this.getAudits();
    this.getEmployees();
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
  getEmployees(){
    this.as.getEmployees().subscribe((response:any)=>{
      this.employees = response;
    })
  }

  assignUnit(){
    this.as.assignUnit(this.selectedUnit,this.selectedEmployees).subscribe((response:any)=>{
      $('#myModal').modal('hide');
    })
  }

  getRowSpan(array:any){
    var rowSpan = 1;
    rowSpan += array.length;
    array.forEach((element) => {
      rowSpan += element.channels.length;
      // rowSpan += element.dataSources.length;
    });
    if(rowSpan == 1)
      return rowSpan+1;
    return rowSpan;
  }

  getRowSpanOfStakeholder(array){
    var rowSpan = 1;
    rowSpan += array.length;
    array.forEach((element) => {
      rowSpan += element.touchpoints.length;
      element.touchpoints.forEach(innerElement => {
        rowSpan += innerElement.channels.length;
      });
    });
    if(rowSpan == 1)
      return rowSpan+1;
    return rowSpan;
  }

  getRowSpanOfTouchPoint(tp:any){
    if(tp.channels.length>tp.dataSources.length)
      return tp.channels.length + 2;
    else
      return tp.dataSources.length + 2;
  }

  // getRowSpanOfChannelOrDataSource(tp:any){
  //   if(tp.channels.length>tp.dataSources.length)
  //     return tp.channels.length + 1;
  //   else
  //     return tp.dataSources.length + 1;
  // }
}