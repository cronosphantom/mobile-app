import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestSessionViewerPage } from './guest-session-viewer.page';

const routes: Routes = [
  {
    path: '',
    component: GuestSessionViewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestSessionViewerPageRoutingModule {}
