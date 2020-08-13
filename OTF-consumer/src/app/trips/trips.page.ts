import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MybookingsService } from '../service/mybookings.service';
import { Booking } from '../model/booking';
import { ListingsService } from '../service/listings.service';
import { Listing } from '../model/listing';


@Component({
  selector: 'app-trips',
  templateUrl: 'trips.page.html',
  styleUrls: ['trips.page.scss']
})
export class TripsPage implements OnInit {
  bookingsList: Array<Booking>;
  listingsList: Array<Listing>;

  constructor(private router: Router, private bookingsService: MybookingsService, private listingsService: ListingsService) {

  }

  ngOnInit() {
    this.bookingsList = this.bookingsService.getAllBookings();
    console.log(this.bookingsList);
    this.listingsList = this.listingsService.getAllListings();
    console.log(this.listingsList);
  }

  navToExplore() {
    this.router.navigateByUrl('main/tabs/explore');
  }

  navToRentals(listing) {
    console.log(listing);
    this.listingsService.setListing(listing);
    this.router.navigate(['rentals']);
  }
}
