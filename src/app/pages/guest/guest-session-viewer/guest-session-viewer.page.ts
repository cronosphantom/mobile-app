import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-session-viewer',
  templateUrl: './guest-session-viewer.page.html',
  styleUrls: ['./guest-session-viewer.page.scss'],
})
export class GuestSessionViewerPage implements OnInit {
 sessionState:any = {
   state: 'planning',

 } //  Will come from Firebase RTDB later

 /*
   state: planning | active | waiting-start | session-over
   totalTeams: 0 - 6
   teamsReady: []   array of teams that have completed the planning phase
   cardAssignment: [{ cardNumber , teamNumber}]
   teamData: [{teamNumber , cardAssigned , cardData:{}  }]
   prayerCardAssignment: [{ cardNumber , teamNumber}]
   currentTurn:  "teamNumber"
   theme: ___
   accessCode: ____
   pinCode: _____
   createdAt:
   summary: 


 */
  constructor() { }

  ngOnInit() {
  }

}
