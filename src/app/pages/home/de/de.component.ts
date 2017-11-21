import {Component, AfterViewInit} from '@angular/core';
import { DEAuditService } from "./de.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StorageService } from "../../shared/common.service";

declare let $:any;

@Component({
  selector:'de',
  templateUrl:'./de.component.html',
  styleUrls:['./de.component.css'],
  providers:[DEAuditService,StorageService]
})
export class DEComponent implements AfterViewInit{
  userDetails:any = this.storage.getData("userDetails");
  categories: any[];
  audits: any[];
  findingForm:FormGroup;
  constructor(public des: DEAuditService, 
              private fb:FormBuilder,
              private storage:StorageService) {
    this.getAudits();
    this.des.getPrerequisite().subscribe((response:any)=>{
      this.categories = response.categories;
    })
    this.findingForm = this.fb.group({
      "finding":["failure"],
      "categoryId":[1],
      "rootCause":["need personal attention"],
      "improvements":["assign 2 employees for the work"],
      "responsibleStaff":["manager"],
      "deadline":["2017-11-20"],
      "sourceRequired":["10 work hours for LD"],
      "touchpointId":[''],
      "createdBy":[this.userDetails.id]
  });
  }

  ngAfterViewInit(){
    $(window).click(function() {
    $(".panel-finding").removeClass("in");
    });
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

  selectedTouchpoint:any;
  submitFinding(){
    this.findingForm.controls["touchpointId"].setValue(this.selectedTouchpoint);
    console.log(this.findingForm.value);
    this.des.postFinding(this.findingForm.value).subscribe((response:any)=>{
      console.log(response);
      $('#myModal').modal('hide');
    })
  }
}