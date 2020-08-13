import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
import { Listing } from '../../models/listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  listings: Array<Listing>;
  callbackListings=(listings) => { this.listings = listings};

  constructor(private listingsService: ListingsService) { //add users array to constructor?

  }

  ngOnInit() {
    this.listingsService.setListings(this.callbackListings);
    this.listings= this.listingsService.getListings();
    console.log(this.listings);
  }

  addListing() {                                                 //function clicked on page
    
  }

  deleteListing() {

  }


}
