import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D0PlanningLaunchPage } from './d0-planning-launch.page';

const routes: Routes = [
  {
    path: '',
    component: D0PlanningLaunchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D0PlanningLaunchPageRoutingModule {}
