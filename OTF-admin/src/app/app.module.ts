import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ListingComponent } from './components/listing/listing.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserComponent,
    HomeComponent,
    BookingComponent,
    ListingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
