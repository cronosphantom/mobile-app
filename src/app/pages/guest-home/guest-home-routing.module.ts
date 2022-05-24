import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestHomePage } from './guest-home.page';

const routes: Routes = [
  {
    path: '',
    component: GuestHomePage
  },
  {
    path: 'join-session-code',
    loadChildren: () => import('./join-session-code/join-session-code.module').then( m => m.JoinSessionCodePageModule)
  },
  {
    path: 'join-select-team',
    loadChildren: () => import('./join-select-team/join-select-team.module').then( m => m.JoinSelectTeamPageModule)
  },
  {
    path: 'guest-session-wait',
    loadChildren: () => import('./guest-session-wait/guest-session-wait.module').then( m => m.GuestSessionWaitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestHomePageRoutingModule {}
