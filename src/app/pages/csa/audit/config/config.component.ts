import {Component} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from "@angular/forms";
import { ConfigService } from "./config.service";
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
  selectedChannel:any={};
  selectedDs:any={};
  checkedChannels:any[]=[];
  checkedDataSources:any[]=[];
  constructor(
    private fb: FormBuilder,
    public cs: ConfigService) {
    this.configForm = this.fb.group({
      unitId: ['',Validators.required],
      stackholderId: ['',Validators.required],
      touchpoints: this.fb.array([this.fb.group({
        touchPoint: ['',Validators.required],
        experience: ['',Validators.required],
        channelIds:[this.checkedChannels,Validators.required],
        dataSourceIds:[this.checkedDataSources,Validators.required],       
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
      touchPoint: ['',Validators.required],
      experience: ['',Validators.required],
      channelIds: new FormArray([]),
      dataSourceIds: new FormArray([]),        
    })
  }

  clearConfigForm(){
    this.configForm.reset();
  }

  getChannels(event:any){
    this.checkedChannels = [];
    Object.keys(this.selectedChannel).forEach(element => {
      if(this.selectedChannel[element]) {
        this.checkedChannels.push(element);
      }      
    });    
  }

  getdataSources(event:any){
    this.checkedDataSources = [];
    Object.keys(this.selectedDs).forEach(element => {
      if(this.selectedDs[element]) {
        this.checkedDataSources.push(element);
      }      
    });
  }

  submitConfig(){
    console.log(this.configForm.value);
    this.cs.postAudit(this.configForm.value).subscribe((response:any)=>{
      console.log(response);
    })
  }
}