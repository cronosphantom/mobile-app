import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D0PlanningLaunchPageRoutingModule } from './d0-planning-launch-routing.module';

import { D0PlanningLaunchPage } from './d0-planning-launch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D0PlanningLaunchPageRoutingModule
  ],
  declarations: [D0PlanningLaunchPage]
})
export class D0PlanningLaunchPageModule {}
