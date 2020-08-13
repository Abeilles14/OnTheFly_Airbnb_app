import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'explore',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: '../explore/explore.module#ExplorePageModule'
          }
        ]
      },
      {
        path: 'trips',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: '../trips/trips.module#TripsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: '../create/create.module#CreatePageModule'
          }
        ]
      },
      {
        path: 'location',
        children: [
          {
            path: '',
            canActivate: [AuthGuardService],
            loadChildren: '../location/location.module#LocationPageModule'
          }
        ]
      },
      {
        path: '',
        canActivate: [AuthGuardService],
        redirectTo: '/tabs/location',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    redirectTo: '/tabs/location',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
