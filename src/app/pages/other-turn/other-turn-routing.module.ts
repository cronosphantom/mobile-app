import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherTurnPage } from './other-turn.page';

const routes: Routes = [
  {
    path: '',
    component: OtherTurnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherTurnPageRoutingModule {}
