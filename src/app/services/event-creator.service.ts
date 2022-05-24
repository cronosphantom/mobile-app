import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventCreatorService {
 public builderData: any ={
   status: 'pre',
   theme: 'Humbleness',
   mode: 'single',
   teams:[],
   numberTeams: 1,
   cardAssignments:{
     card1:0,
     card2:0,
     card3:0,
     card4:0,
     card5:0,
     card6:0
   }

 };
  constructor() { }

  setStringData(elm: string , val: string){
   this.builderData[elm] = val;
  }
  setFloatData(elm: string , val: number){
   this.builderData[elm] = val;
  }
}
