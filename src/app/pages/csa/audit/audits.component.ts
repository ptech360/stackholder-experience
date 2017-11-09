import {Component} from '@angular/core';
import { AuditService } from "./audits.service";

@Component({
  selector:'audit',
  templateUrl:'./audits.component.html',
  styleUrls:['./audits.component.css'],
  providers:[AuditService]
})
export class AuditComponent{
  audits:any[]=[];  
  constructor(public as:AuditService){
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