import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A0BasicSettingsPageRoutingModule } from './a0-basic-settings-routing.module';

import { A0BasicSettingsPage } from './a0-basic-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A0BasicSettingsPageRoutingModule
  ],
  declarations: [A0BasicSettingsPage]
})
export class A0BasicSettingsPageModule {}
