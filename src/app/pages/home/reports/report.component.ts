import {Component} from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector:'report',
  templateUrl:'./report.component.html',
  styleUrls:['./report.component.css'],
  providers:[ReportService]
})
export class ReportComponent{
  audits: any[];
  constructor(private rs:ReportService){
    this.getAudits();
  }

  getAudits(){
    this.rs.getAudits().subscribe((response:any)=>{
      if(response.status == 204){
        this.audits = [];
      }else{
      this.audits = response;
    }
    })
  }

  getRowSpanOfStakeholder(array){
    var rowSpan = 1;
    rowSpan += array.length;
    array.forEach((element) => {
      rowSpan += element.touchpoints.length * 2;
    });
    if(rowSpan == 1)
      return rowSpan+1;
    return rowSpan;
  }
}