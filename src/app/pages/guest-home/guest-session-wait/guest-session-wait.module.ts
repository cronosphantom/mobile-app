import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestSessionWaitPageRoutingModule } from './guest-session-wait-routing.module';

import { GuestSessionWaitPage } from './guest-session-wait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestSessionWaitPageRoutingModule
  ],
  declarations: [GuestSessionWaitPage]
})
export class GuestSessionWaitPageModule {}
