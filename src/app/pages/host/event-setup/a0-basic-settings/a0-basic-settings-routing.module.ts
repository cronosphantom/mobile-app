import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A0BasicSettingsPage } from './a0-basic-settings.page';

const routes: Routes = [
  {
    path: '',
    component: A0BasicSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A0BasicSettingsPageRoutingModule {}
