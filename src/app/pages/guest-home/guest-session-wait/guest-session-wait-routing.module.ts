import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestSessionWaitPage } from './guest-session-wait.page';

const routes: Routes = [
  {
    path: '',
    component: GuestSessionWaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestSessionWaitPageRoutingModule {}
