import { Component, OnInit } from '@angular/core';
import { EventCreatorService } from "src/app/services/event-creator.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  mode: string = 'single'
  numberTeams= 1
  builderData: any
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private eventCreatorService: EventCreatorService) { }

  ngOnInit() {
    this.getData()
  }
  modeClass(mode){
    return mode == this.mode ? 'active ' : 'inactive'
  }
  getData(){
    this.builderData = this.eventCreatorService.builderData
  }

  incrementQty(){
    if( this.numberTeams < 6)
    this.numberTeams = this.numberTeams + 1
    this.eventCreatorService.setFloatData('numberTeams',this.numberTeams)
  }
   decrementQty(){
    if( this.numberTeams > 1)
    this.numberTeams = this.numberTeams - 1
  }
  setMode(mode){
    this.eventCreatorService.setStringData('mode', mode)
    this.mode = mode
  }

}
