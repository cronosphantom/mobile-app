import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestHomePageRoutingModule } from './guest-home-routing.module';

import { GuestHomePage } from './guest-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GuestHomePageRoutingModule
  ],
  declarations: [GuestHomePage]
})
export class GuestHomePageModule {}
