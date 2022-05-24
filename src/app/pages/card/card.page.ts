import { Component, OnInit } from '@angular/core';
import {IonSlides } from '@ionic/angular';  
import { ViewChild} from '@angular/core';  
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
 

export class CardPage implements OnInit {
  slideOpts = {
    initialSlide: 3,
    speed: 100
  };

  @ViewChild('slides', { static: true }) slider: IonSlides;  
  segment = 0;  
  constructor() { }  
  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  

  ngOnInit() {
  }

}
