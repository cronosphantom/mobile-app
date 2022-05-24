import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDashPage } from './event-dash.page';

const routes: Routes = [
  {
    path: '',
    component: EventDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDashPageRoutingModule {}
