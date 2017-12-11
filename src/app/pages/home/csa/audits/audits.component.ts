import {Component} from '@angular/core';
import { AuditService } from "./audits.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare let $:any;

@Component({
  selector:'audit',
  templateUrl:'./audits.component.html',
  styleUrls:['./audits.component.css'],
  providers:[AuditService]
})
export class AuditsComponent{
  units: any[]=[];
  audits:any[]=[]; 
  selectedEmployees:any;
  selectedUnit:any; 
  editForm:FormGroup;
  constructor(public as:AuditService,public fb:FormBuilder){
    this.editForm = this.loadEditForm();
    this.getAudits();
    this.getPrerequisite();
  }

  loadEditForm(){
    return this.fb.group({
      touchpoint:['',Validators.required],
      experience:['',Validators.required]
    });
  }

  loadEditFormData(data:any,touchpoints:any[],index:any){
    this.selectedTouchpoint = data;
    this.selectedTouchPoints = touchpoints;
    this.selectedTouchpointIndex = index;
    this.editForm.controls["touchpoint"].patchValue(data.touchpoint);
    this.editForm.controls["experience"].patchValue(data.experience);
  }
  
  selectedTouchPoints:any[];
  selectedTouchpoint:any;
  selectedTouchpointIndex:any;
  submitEditForm(){
    this.as.updateTouchPoint(this.selectedTouchpoint.touchpointId,this.editForm.value).subscribe((response:any)=>{
      this.selectedTouchpoint.touchpoint = this.editForm.controls["touchpoint"].value;
      this.selectedTouchpoint.experience = this.editForm.controls["experience"].value;
      $('#editModal').modal('hide');
    })
  }

  deleteTouchpoint(){
    if(confirm("Are You Sure you want to Delete this touch point???"))
      this.as.deleteTouchPoint(this.selectedTouchpoint.touchpointId).subscribe((response:any)=>{
        this.selectedTouchPoints.splice(this.selectedTouchpointIndex,1);
      })
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

  getAuditsByUnit(unitId){
    this.as.getAuditsByUnit(unitId).subscribe((response:any)=>{
      if(response.status == 204){
        this.audits = [];
      }else{
      this.audits = response;
    }
    })
  }

  employees:any[];
  getEmployees(unitId:any){
    this.as.getEmployees(unitId).subscribe((response:any)=>{
      if(response.status == 204){
        this.employees = [];
      }else{
        this.employees = response;
      }
      
    })
  }

  getPrerequisite(){
    this.as.getPrerequisite().subscribe((response:any)=>{
      if(response.status == 204){
        this.units = [];
      }else{
        this.units = response.units;
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