import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth.guard';


const routes: Routes = [
  { path: 'main', loadChildren:'./tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'location', canActivate: [AuthGuardService], loadChildren: './location/location.module#LocationPageModule' },
  { path: 'explore',  canActivate: [AuthGuardService], loadChildren: './explore/explore.module#ExplorePageModule' },
  { path: 'rentals',  canActivate: [AuthGuardService], loadChildren: './rentals/rentals.module#RentalsPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'create', canActivate: [AuthGuardService], loadChildren: './create/create.module#CreatePageModule' },
  { path: 'requests', canActivate: [AuthGuardService], loadChildren: './requests/requests.module#RequestsPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
