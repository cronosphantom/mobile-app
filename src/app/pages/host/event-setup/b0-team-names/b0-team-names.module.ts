import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B0TeamNamesPageRoutingModule } from './b0-team-names-routing.module';

import { B0TeamNamesPage } from './b0-team-names.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B0TeamNamesPageRoutingModule
  ],
  declarations: [B0TeamNamesPage]
})
export class B0TeamNamesPageModule {}
