import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

class createListing {
  success: boolean;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  public listingsList: Array<Listing> = [];
  private listingDetails: Listing;
  newMsg: string = "New listing created";

  // lisbon = new Listing('Back to Lisbon Hostel', 'Lisbon, Portugal', 'Nice hostel in Santa Isabel', 60, 50, 'https://back-to-lisbon.webnode.com/_files/200000035-d03b7d133f/room6-0.jpg');
  // capetown = new Listing('Once in Cape Town', 'Cape Town, South Africa', 70, 'https://q-ec.bstatic.com/images/hotel/max1024x768/578/57834468.jpg');
  // berlin = new Listing('PLUS Berlin', 'Berlin, Germany', 95, 'https://thumbnails.trvl-media.com/FNV_vYPdO4ecLpM4PP3NFBMyXm8=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/4000000/3790000/3783000/3782907/5b6d5e8d_y.jpg');


  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController) {

    //this.listingsList = [this.lisbon, this.capetown, this.berlin];
  }

  // PROVIDER APP //
  // newListing(listingDetails) {
  //   this.http.post('http://localhost:5000/api/listing/create', {
  //     hostID: UserService.getHostId, title: listingDetails.title, location: listingDetails.location, description: listingDetails.description, numberOfPeople: listingDetails.numberOfPeople, pricePerNight: listingDetails.pricePerNight, imgURL: listingDetails.imgURL
  //   }).subscribe((response: createListing) => {
  //     if (response) {
  //       console.log("http posting successful");
  //       this.presentToast(this.newMsg);
  //     } else {
  //       console.log(response);
  //     }
  //   });
  // }

  setAllListings(): Listing[] {
    this.listingsList = [];
    this.http.get('http://localhost:5000/api/listings')
      .subscribe((response) => {
        Object.values(response).forEach((listing) => {
          this.listingsList.push(new Listing(listing.id, listing.hostID, listing.title, listing.location, listing.description, listing.numberOfPeople, listing.pricePerNight, listing.imgURL))
        })
        console.log("http get all listings successful");
      });
    return this.listingsList;
  }
  getAllListings(): Listing[] {
    return this.listingsList;
  }

  getListingById(id): Listing {             //returns an array!!!
    this.http.get('http://localhost:5000/api/listings/' + id)
    .subscribe((data) => {

        this.listingDetails = new Listing(data[0].id, data[0].hostID, data[0].title, data[0].location, data[0].description, data[0].numberOfPeople, data[0].pricePerNight, data[0].imgURL);
      });
      return this.listingDetails;
  }

  // called from explore when clicking on listing
  setListing(listing) {
    this.listingDetails = listing;
  }
  getListing() {
    return this.listingDetails;
  }

  getListingID() {
    console.log(this.listingDetails);
    return this.listingDetails.getListingID();
  }
  

  // PROVIDER APP //

  // editListing() {

  // }

  // deleteListing() {

  // }

  // async presentToast(msg: string) {
  //   const toast = await this.toastCtrl.create({
  //     message: msg,
  //     duration: 1500,
  //     position: 'top',
  //     color: 'dark'
  //   });
  //   toast.present();
  // }




}
