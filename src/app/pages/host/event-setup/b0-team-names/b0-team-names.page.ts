import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCreatorService } from 'src/app/services/event-creator.service';

@Component({
  selector: 'app-b0-team-names',
  templateUrl: './b0-team-names.page.html',
  styleUrls: ['./b0-team-names.page.scss'],
})
export class B0TeamNamesPage implements OnInit {


  eventData:any={
    teams:[],
    numberTeams:0
  }

  constructor(private eventCreatorSvc:EventCreatorService,
              private router:Router

  ) { }

  ngOnInit() {
    this.eventData.numberTeams = this.eventCreatorSvc.builderData['numberTeams']
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
