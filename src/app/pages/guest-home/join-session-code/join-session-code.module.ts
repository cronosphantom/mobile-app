import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinSessionCodePageRoutingModule } from './join-session-code-routing.module';

import { JoinSessionCodePage } from './join-session-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JoinSessionCodePageRoutingModule
  ],
  declarations: [JoinSessionCodePage]
})
export class JoinSessionCodePageModule {}
