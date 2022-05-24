import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinSelectTeamPageRoutingModule } from './join-select-team-routing.module';

import { JoinSelectTeamPage } from './join-select-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JoinSelectTeamPageRoutingModule
  ],
  declarations: [JoinSelectTeamPage]
})
export class JoinSelectTeamPageModule {}
