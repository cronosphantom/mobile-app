import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCreatorService } from 'src/app/services/event-creator.service';

@Component({
  selector: 'app-c0-activity-cards',
  templateUrl: './c0-activity-cards.page.html',
  styleUrls: ['./c0-activity-cards.page.scss'],
})
export class C0ActivityCardsPage implements OnInit {
  eventData:any={
    teams:[],
    cardAssignments:{
        card1:0,
        card2:0,
        card3:0,
        card4:0,
        card5:0,
        card6:0
      
    }
  }
  constructor(private eventCreatorSvc:EventCreatorService,
    private router:Router) { }

  ngOnInit() {
    this.eventData.teams = this.eventCreatorSvc.builderData['teams']
  }
  gotoPage(page){
    this.eventCreatorSvc.builderData={
      ...this.eventCreatorSvc.builderData,
      ...this.eventData
    }
    console.log(this.eventCreatorSvc.builderData)
    this.router.navigate([page])
  }
  }


