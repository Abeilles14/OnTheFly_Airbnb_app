import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  public listings: Array<Listing> = [];

  constructor(private http: HttpClient, private router: Router) {

  }

  setListings(callbackListings){
    this.listings = [];
    this.http.get('http://localhost:5000/api/listings')
    .subscribe((response) => {
      Object.values(response).forEach((allListings) => {
        this.listings.push(new Listing(allListings.id, allListings.hostID, allListings.title, allListings.location, allListings.description, allListings.numberOfPeople, allListings.pricePerNight, allListings.imgURL))
        callbackListings(this.listings);
        console.log(this.listings);
      });
      console.log("http get all listings successful");
    });
  }

  getListings() :Listing []{
    return this.listings;
  }
  

  newListing(listingDetails) {
    this.http.post('http://localhost:5000/api/listings/create', {
      hostID: listingDetails.hostID, title: listingDetails.title, location: listingDetails.location, description: listingDetails.description, numberOfPeople: listingDetails.numberOfPeople, pricePerNight: listingDetails.pricePerNight, imgURL: listingDetails.imgURL
    }).subscribe((response) => {
      if (response) {
        console.log("http posting successful");
      } else {
        console.log(response);
      }
    });
  }

}
