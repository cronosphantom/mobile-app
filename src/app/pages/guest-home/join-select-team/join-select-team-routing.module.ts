import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinSelectTeamPage } from './join-select-team.page';

const routes: Routes = [
  {
    path: '',
    component: JoinSelectTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinSelectTeamPageRoutingModule {}
