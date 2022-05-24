import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C0ActivityCardsPage } from './c0-activity-cards.page';

const routes: Routes = [
  {
    path: '',
    component: C0ActivityCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C0ActivityCardsPageRoutingModule {}
