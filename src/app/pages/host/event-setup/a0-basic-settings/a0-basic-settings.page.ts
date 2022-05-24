import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { EventCreatorService } from 'src/app/services/event-creator.service';

@Component({
  selector: 'app-a0-basic-settings',
  templateUrl: './a0-basic-settings.page.html',
  styleUrls: ['./a0-basic-settings.page.scss'],
})
export class A0BasicSettingsPage implements OnInit {
  eventData:any={}
  themes:any=[]

  constructor(private eventCreatorSvc:EventCreatorService,
              private db:DbService,
              private router:Router
    ) { }

  ngOnInit() {
    this.getThemes()
  }
  getThemes(){
    this.db.themes().subscribe(res=>this.themes = res["data"]["themes"])
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
