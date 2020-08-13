import { Injectable } from '@angular/core';
import { Booking } from '../model/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListingsService } from './listings.service'
import { UserService } from './user.service'
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { Listing } from '../model/listing';

class createBooking {
  success: boolean;
  message: string;
  data: any;
}


@Injectable({
  providedIn: 'root'
})
export class MybookingsService {
  public bookingsList: Array<Booking> = [];
  private bookingDetails: Booking;
  private userID: any;
  private hostListings: Array<Listing> = [];
  //clicked: Boolean = false;

  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController, private listingsService: ListingsService, private userService: UserService) {
    this.userID = userService.getUserID();
  }

  // getListingsByHostId(userID): Array<Listing> {
  //   this.hostListings = this.listingsService.getListingsByHostId(userID);
  //   return this.hostListings;
  // }


  setByListId(listingID, callbackBookings) {
    // debugger;
    this.bookingsList = [];
    this.http.get('http://localhost:5000/api/bookings/listing/' + listingID)
      .subscribe((response) => {
        Object.values(response).forEach((booking) => {
          this.bookingsList.push(new Booking(booking.id, booking.userID, booking.listingID, booking.dateStart, booking.dateEnd, booking.status))
          callbackBookings(this.bookingsList);
          console.log(this.bookingsList);
          console.log("http get bookings successful");
          // debugger;
        })
      });
  }

  setBookingStatus(bookingID, status) {
    this.http.post('http://localhost:5000/api/bookings/status', {
      bookingID, status
    }).subscribe((response) => {
      if (response) {
        console.log("http posting successful");
      } else {
        console.log(response);
      }
    });
  }

  // processedBooking(clicked) {
  //   this.clicked = clicked;
  // }


  // called from trips when clicking on booking
  setBooking(booking) {
    this.bookingDetails = booking;
  }
  getBookings() {
    return this.bookingsList;
  }

  getBookingId() {

  }

  getUserID() {
    return this.bookingDetails.getUserID();
  }




  // getByListIdStat(listingID, status) {
  //   this.bookingsList = [];
  //   this.http.get('http://localhost:5000/api/bookings/listing/' + listingID + "/" + status)
  //     .subscribe((response) => {
  //       Object.values(response).forEach((booking) => {
  //         this.bookingsList.push(new Booking(booking.id, booking.userID, booking.listingID, booking.dateStart, booking.dateEnd, booking.status))
  //         this.setBooking(this.bookingsList);
  //         console.log("http get " + status + " bookings successful");
  //         debugger;
  //       })
  //     });
  //     return this.bookingsList;
  // }


  // getByHostIdStatus(userID, status) {     //gets listings by host id, gets bookings by host id and status by listing id and status
  //   this.bookingsList = [];
  //   this.hostListings = [];
  //   this.hostListings = this.getListingsByHostId(userID);
  //   debugger;
  //   for (let i = 0; i < this.hostListings.length; i++) {
  //     debugger;
  //     return this.http.get('http://localhost:5000/api/bookings/listing/' + this.hostListings[i].getListingID() + "/" + status)
  //       .subscribe((response) => {
  //         debugger; 
  //         Object.values(response).forEach((booking) => {
  //           this.bookingsList.push(new Booking(booking.id, booking.userID, booking.listingID, booking.dateStart, booking.dateEnd, booking.status))
  //           console.log("http get " + status + " bookings successful");
  //           debugger;
  //         })
  //       });
  //   }
  //   return this.bookingsList;
  // }

  // getByUserIdStatus(userID, status) {
  //   this.bookingsList = [];
  //   this.http.get('http://localhost:5000/api/bookings/user/' + userID + "/" + status)
  //     .subscribe((response) => {
  //       Object.values(response).forEach((booking) => {
  //         this.bookingsList.push(new Booking(booking.id, booking.userID, booking.listingID, booking.dateStart, booking.dateEnd, booking.status))
  //         console.log("http get " + status + " bookings successful");
  //         debugger;
  //       })
  //     });
  //   return this.bookingsList;
  // }


  // CONSUMER APP //
  // newBooking(bookingDetails) {
  //   console.log(this.userService.getUserID());
  //   console.log(this.listingsService.getListingID());
  //   this.http.post('http://localhost:5000/api/bookings/create', {
  //     userID: bookingDetails.userID, listingID: bookingDetails.listingID, dateStart: bookingDetails.dateStart, dateEnd: bookingDetails.dateEnd, status: bookingDetails.status
  //   }).subscribe((response: createBooking) => {
  //     if (response) {
  //       console.log("http posting successful");
  //       console.log(response);
  //       this.presentToast(this.newMsg);
  //     } else {
  //       console.log(response);
  //     }
  //   });
  // }


}
