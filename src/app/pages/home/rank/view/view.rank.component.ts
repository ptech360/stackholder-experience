import {Component} from '@angular/core';
import { RankService } from '../rank.service';

declare let $:any;

@Component({
  selector:'view-rank',
  templateUrl:'./view.rank.component.html',
  styleUrls:['./view.rank.component.css'],
  providers:[RankService]
})
export class ViewRankComponent{
  stakeholderId: any;
  submitDisabled: boolean = true;
  stackholders: any;
  tableData: any[]=[];
  constructor(public rs: RankService) {
    this.getPrerequisite();
  }
  getRankingTable(event: any) {
    this.rs.getRankedJourney(event).subscribe((response: any) => {
      if(response.status == 204){
        alert("there is not ranked any touchpoints corresponding to this stakeholder");
        this.tableData = [];
      }else{
        this.tableData = response;
        this.tableData.forEach((element:any,index:any) => {
          this.checkValue[index]=element.rank;
        });
        }
    })
  }

  getPrerequisite() {
    this.rs.getPrerequisite().subscribe((response: any) => {
      if(response.status == 204){
        this.stackholders = [];
      }else
      this.stackholders = response.stackholders;
    })
  }

  checkValue:any[]=[];
  validateRank(event:any,index:any): any {
    console.log(this.checkValue);
    if(this.checkValue.indexOf(event.srcElement.value)===-1){
      $('#' + event.srcElement.id).css({ 'border': '1px solid black' });
    }else{
      $('#' + event.srcElement.id).css({ 'border': '1px solid red' });
    }
    if (event.srcElement.value > this.tableData.length) {
      $('#' + event.srcElement.id).css({ 'border': '1px solid red' });
    }
    this.checkValue[index]=event.srcElement.value;
    this.isDisable();
  }
  

  isDisable(){
    this.tableData.forEach(element => {
      if(this.checkValue.indexOf(element.rank)!=-1){
        this.submitDisabled = true;
        return;
        }else if(element.rank>this.tableData.length){
          this.submitDisabled = true;
          return;
        }
      this.submitDisabled = false;
    });
  }

  submitRank() {
    var touchPointRank = [];
    console.log(this.tableData);
    this.tableData.forEach((element:any,index:any) => {
      touchPointRank.push({
        touchpointId:element.touchpointId,
        rank:this.checkValue[index]
      });
    });
    this.rs.saveRanking(this.stakeholderId,touchPointRank).subscribe((response:any)=>{
      console.log(response);
    })
  }
}


