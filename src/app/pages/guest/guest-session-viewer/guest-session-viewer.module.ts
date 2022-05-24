import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestSessionViewerPageRoutingModule } from './guest-session-viewer-routing.module';

import { GuestSessionViewerPage } from './guest-session-viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestSessionViewerPageRoutingModule
  ],
  declarations: [GuestSessionViewerPage]
})
export class GuestSessionViewerPageModule {}
