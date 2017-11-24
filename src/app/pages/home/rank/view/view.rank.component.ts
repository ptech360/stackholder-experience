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
  showFinding : boolean[] = [];
  constructor(public rs: RankService) {
    this.getPrerequisite();
  }
  getRankingTable(event: any) {
    this.rs.getRankedJourney(event).subscribe((response: any) => {
      console.log(this.tableData.length);
      for(let i=0; i<response.length;i++){
        this.showFinding[i] = false;
      }
      if(response.status == 204){
        alert("there is not ranked any touchpoints corresponding to this stakeholder");
        this.tableData = [];
      }else{

        console.log(this.showFinding);
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
  // validateRank(event:any,index:any): any {
  //   console.log(this.checkValue);
  //   if(this.checkValue.indexOf(event.srcElement.value)===-1){
  //     $('#' + event.srcElement.id).css({ 'border': '1px solid black' });
  //   }else{
  //     $('#' + event.srcElement.id).css({ 'border': '1px solid red' });
  //   }
  //   if (event.srcElement.value > this.tableData.length) {
  //     $('#' + event.srcElement.id).css({ 'border': '1px solid red' });
  //   }
  //   this.checkValue[index]=event.srcElement.value;
  //   this.isDisable();
  // }
  

  // isDisable(){
  //   this.tableData.forEach(element => {
  //     if(this.checkValue.indexOf(element.rank)!=-1){
  //       this.submitDisabled = true;
  //       return;
  //       }else if(element.rank>this.tableData.length){
  //         this.submitDisabled = true;
  //         return;
  //       }
  //     this.submitDisabled = false;
  //   });
  // }

  isDisable(){
    
    for(let i=0;i<this.tableData.length;i++){
      if(document.getElementById(`rank${i}`).style.borderColor == 'red'){
        // this.submitDisabled = true;
        return true;
      }
    }
    return false;
    // this.submitDisabled = false;
  }

  validateRank(event:any,index:any,inp:any): any {
    
    // console.log('index' + this.checkValue.indexOf(inp.value));
    if(inp.value == '' || ((this.checkValue.filter((value)=>{return value == inp.value}).length) == 1 && inp.value >= 1 && inp.value <= this.tableData.length)){
      $('#' + inp.id).css({ 'border': '1px solid black' });
    }else{
      $('#' + inp.id).css({ 'border': '1px solid red' });
    }
    for(let i=0;i<this.tableData.length;i++){
      if(document.getElementById(`rank${i}`).style.borderColor == 'red'){
        // var element = document.getElementById(`rank${i}`);
        // console.log(this.checkValue[i]);
        if((this.checkValue.filter((value)=>{return value == this.checkValue[i]}).length) == 1 && this.checkValue[i] >= 1 && this.checkValue[i] <= this.tableData.length){
          $('#rank' + i).css({ 'border': '1px solid black' });
        }else{
          $('#rank' + i).css({ 'border': '1px solid red' });
        }  
      }
    }
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


