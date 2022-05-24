import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherTurnPageRoutingModule } from './other-turn-routing.module';

import { OtherTurnPage } from './other-turn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherTurnPageRoutingModule
  ],
  declarations: [OtherTurnPage]
})
export class OtherTurnPageModule {}
