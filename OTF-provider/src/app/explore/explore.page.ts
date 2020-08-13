import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListingsService } from '../service/listings.service';
import { Listing } from '../model/listing';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit {    //implements OnInit 
  listingsList: Array<Listing> = [];

  constructor(private router: Router, private listingService: ListingsService) {

  }
  ngOnInit() {      //update listings
    this.listingsList = this.listingService.setAllListings();
    console.log(this.listingsList);
  }

navToCreate() {
  this.router.navigate(['create']);
}

  navToRentals(listing) {
    this.listingService.setListing(listing);
    this.router.navigate(['rentals']);
  }






  // ngOnInit() {
  //     this.activatedRoute.queryParamMap.subscribe(
  //       (data) => {
  //         this.city = data.get('city');
  //         console.log("getting city..");
  //         console.log(this.city);
  //       }
  //     )
  // }

}