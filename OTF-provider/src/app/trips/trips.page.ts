import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MybookingsService } from '../service/mybookings.service';
import { Booking } from '../model/booking';
import { ListingsService } from '../service/listings.service';
import { Listing } from '../model/listing';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-trips',
  templateUrl: 'trips.page.html',
  styleUrls: ['trips.page.scss']
})
export class TripsPage implements OnInit {
  private bookingsDetails: Array<Booking> = [];
  private listingsList: Array<Listing> = [];
  private accepted: Boolean;
  private pending: Boolean;
  private declined: Boolean;
  private hostID: any;
  private listingID: any;
  callbackBookings=(bookings) => { this.bookingsDetails = bookings};

  constructor(private router: Router, private userService: UserService, private bookingsService: MybookingsService, private listingsService: ListingsService) {
    this.hostID = this.userService.getUserID();
    this.accepted = false;
    this.pending = true;
    this.declined = false;


  }

  ngOnInit() {
    this.listingsService.setListingsByHostId(this.hostID).subscribe((response) => {
      Object.values(response).forEach((listing) => {
        this.listingsList.push(new Listing(listing.id, listing.hostID, listing.title, listing.location, listing.description, listing.numberOfPeople, listing.pricePerNight, listing.imgURL))

        console.log(this.listingsList);
      })
      console.log("http get all listings successful");
    });
  }


  navToExplore() {
    this.router.navigateByUrl('main/tabs/explore');
  }

  navToRequests(listing) {
    this.listingsService.setListing(listing);       //stores listings
    this.bookingsService.setByListId(listing.id,this.callbackBookings);    //gets all bookings from listing clicked
    this.router.navigate(['requests']);
  }
}
