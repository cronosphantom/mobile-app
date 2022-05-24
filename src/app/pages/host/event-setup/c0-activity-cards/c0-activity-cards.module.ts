import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C0ActivityCardsPageRoutingModule } from './c0-activity-cards-routing.module';

import { C0ActivityCardsPage } from './c0-activity-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C0ActivityCardsPageRoutingModule
  ],
  declarations: [C0ActivityCardsPage]
})
export class C0ActivityCardsPageModule {}
