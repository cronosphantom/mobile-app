import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'guest-home',
    pathMatch: 'full'
  },
  {
    path: 'guest-home',
    loadChildren: () => import('./pages/guest-home/guest-home.module').then(m => m.GuestHomePageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'host',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/host/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'guest',
    loadChildren: () => import('./pages/guest/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'a0-basic-settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/host/event-setup/a0-basic-settings/a0-basic-settings.module').then(m => m.A0BasicSettingsPageModule)
  },
  {
    path: 'b0-team-names',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/host/event-setup/b0-team-names/b0-team-names.module').then(m => m.B0TeamNamesPageModule)
  },
  {
    path: 'c0-activity-cards',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/host/event-setup/c0-activity-cards/c0-activity-cards.module').then(m => m.C0ActivityCardsPageModule)
  },
  {
    path: 'd0-planning-launch',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/host/event-setup/d0-planning-launch/d0-planning-launch.module').then(m => m.D0PlanningLaunchPageModule)
  },
  {
    path: 'join',
    loadChildren: () => import('./pages/guest/join/join.module').then(m => m.JoinPageModule)
  },
  {
    path: 'guest-session-viewer',
    loadChildren: () => import('./pages/guest/guest-session-viewer/guest-session-viewer.module').then(m => m.GuestSessionViewerPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'assign',
    loadChildren: () => import('./pages/assign/assign.module').then(m => m.AssignPageModule)
  },
  {
    path: 'planning',
    loadChildren: () => import('./pages/planning/planning.module').then(m => m.PlanningPageModule)
  },
  {
    path: 'waiting',
    loadChildren: () => import('./pages/waiting/waiting.module').then(m => m.WaitingPageModule)
  },
  {
    path: 'guest',
    loadChildren: () => import('./pages/guest/guest.module').then(m => m.GuestPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule)
  },
  {
    path: 'other-turn',
    loadChildren: () => import('./pages/other-turn/other-turn.module').then(m => m.OtherTurnPageModule)
  },
  {
    path: 'event-dash',
    loadChildren: () => import('./pages/event-dash/event-dash.module').then(m => m.EventDashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
