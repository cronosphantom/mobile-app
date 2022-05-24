import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDashPageRoutingModule } from './event-dash-routing.module';

import { EventDashPage } from './event-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDashPageRoutingModule
  ],
  declarations: [EventDashPage]
})
export class EventDashPageModule {}
