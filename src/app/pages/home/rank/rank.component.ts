import { Component } from '@angular/core';
import { RankService } from './rank.service';
import { resetFakeAsyncZone } from '@angular/core/testing';

declare let $: any;

@Component({
  selector: 'rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css'],
  providers: [RankService]
})
export class RankComponent {
  stakeholderId:any;
  submitDisabled: boolean = true;
  tableData: any[] = [];
  stackholders: any[] = [];
  constructor(public rs: RankService) {
    this.getPrerequisite();
  }
  getRankingTable(event: any) {
    this.rs.getJourneyForRank(event).subscribe((response: any) => {
      this.tableData = response;
    })
  }

  getPrerequisite() {
    this.rs.getPrerequisite().subscribe((response: any) => {
      this.stackholders = response.stackholders;
    })
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
  checkValue:any[]=[];
  validateRank(event:any,index:any): any {
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
}