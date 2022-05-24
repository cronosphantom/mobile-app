import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinSessionCodePage } from './join-session-code.page';

const routes: Routes = [
  {
    path: '',
    component: JoinSessionCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinSessionCodePageRoutingModule {}
