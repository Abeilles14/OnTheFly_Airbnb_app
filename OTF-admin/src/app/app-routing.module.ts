import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component'
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ListingComponent } from './components/listing/listing.component';

const routes: Routes = [
  { path: '', redirectTo:'user', pathMatch:'full'},
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent},
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'listing', component: ListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
