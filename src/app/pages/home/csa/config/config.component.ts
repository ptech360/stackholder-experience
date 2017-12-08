import {Component} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from "@angular/forms";
import { ConfigService } from "./config.service";
import { Location } from '@angular/common';
declare let $ :any;
@Component({
  selector:'config',
  templateUrl:'./config.component.html',
  styleUrls:['./config.component.css'],
  providers:[ConfigService]
})
export class ConfigComponent{
  configForm:FormGroup;
  units:any[]=[];
  stackholders:any[]=[];
  channels:any[]=[];
  dataSources:any[]=[];
  surveyDataSource:boolean[]=[];
  selectedChannel:any={};
  selectedDs:any={};
  checkedChannels:any[]=[];
  checkedDataSources:any[]=[];
  constructor(
    private fb: FormBuilder,
    public cs: ConfigService,
    public _location:Location) {
    this.configForm = this.fb.group({
      unitId: ['',Validators.required],
      stackholderId: ['',Validators.required],
      touchpoints: this.fb.array([this.fb.group({
        touchpoint: ['',Validators.required],
        experience: ['',Validators.required],
        channelIds:this.fb.array([]),
        dataSourceIds:this.fb.array([])   
      })])
    });
    this.getPrerequisite();
  }

  getPrerequisite(){
    this.cs.getPrerequisite().subscribe((response:any)=>{
      this.units = response.units;
      this.stackholders = response.stackholders;
      this.channels = response.channels;
      this.dataSources = response.dataSources;
    })
  }

  getStakeholder(unitId:any){
    this.cs.getStakeholder(unitId).subscribe((response:any)=>{
      this.stackholders = response;
    })
  }

  removeTouchPoint(index:any){
    const touchpoints = <FormArray>this.configForm.controls["touchpoints"];
    touchpoints.removeAt(index);
  }

  addTouchPoint(){
    const touchpoints = <FormArray>this.configForm.controls["touchpoints"];
    touchpoints.push(this.setTouchPoint());
  }

  setTouchPoint(){
    return this.fb.group({
      touchpoint: ['',Validators.required],
      experience: ['',Validators.required],
      channelIds:this.fb.array([]),
      dataSourceIds:this.fb.array([])        
    })
  }

  clearConfigForm(){
    this.configForm.reset();
    $('.checkboxes').prop('checked',false);
    // document.getElementById('checkboxes').checked = false;

  }

  getChannels(touchPoint:any,channel:any, isChecked: boolean){
    const formArray = <FormArray>touchPoint.controls.channelIds;
    
      if(isChecked) {
        formArray.push(new FormControl(channel));
      } else {
        let index = formArray.controls.findIndex(x => x.value == channel)
        formArray.removeAt(index);
      }    
  }

  getdataSources(touchPoint:any,index,dataSource:any, isChecked: boolean){
    const formArray = <FormArray>touchPoint.controls.dataSourceIds;
    const touchPointControl = <FormGroup>touchPoint;
      if(isChecked) {
        formArray.push(new FormControl(dataSource));
        if(dataSource == 3){
          touchPointControl.addControl('surveyTitle',new FormControl(''));
          this.surveyDataSource[index] = true;
        }
      } else {
        if(dataSource == 3){
          if(touchPointControl.contains('surveyTitle'))
            touchPointControl.removeControl('surveyTitle');
          this.surveyDataSource[index] = false;
        }
        let indx = formArray.controls.findIndex(x => x.value == dataSource)
        formArray.removeAt(indx);
      } 
  }

  submitConfig(){
    console.log(this.configForm.value);
    this.cs.postAudit(this.configForm.value).subscribe((response:any)=>{
      console.log(response);
      this._location.back();
    })
  }
}