import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { Router } from '@angular/router'
import { MybookingsService } from '../service/mybookings.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ListingsService } from '../service/listings.service';
import { Listing } from '../model/listing';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  booking: Booking;
  currentUser: User;
  listingInfo: Listing;
  currentListID: any;
  currentListings: Array<Booking> = [];
  currentBookings: Array<Booking> = [];
  callbackUser=(user) => { this.currentUser = user};
  click: Boolean = false;

  constructor(private router: Router, private bookingsService: MybookingsService, private userService: UserService, private listingsService: ListingsService, private toastCtrl: ToastController, ) {

  }

  ngOnInit() {
    this.listingInfo = this.listingsService.getListing();     //listing we are looking at
    this.currentListID = this.listingInfo.getListingID();     //listing ID
    this.currentBookings = this.bookingsService.getBookings();    //get all bookings related to listingID
    // debugger;
    console.log(this.currentBookings);
    this.getUserById;
  }

  getUserById(userID) {
    this.currentUser = this.userService.getUserById(userID, this.callbackUser);
    console.log(this.currentUser);
  }

  // click(click){
  //   this.bookingsService.processedBooking(click);
  // }


  accept(bookingID) {
    this.bookingsService.setBookingStatus(bookingID, "accepted");
    this.presentToast("Booking accepted");
    this.click = true;
  }

  decline(bookingID) {
    this.bookingsService.setBookingStatus(bookingID, "declined");
    this.presentToast("Booking declined");
    this.click = true
  }


  // TOAST // TESTED!
  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'top',
      color: 'light'
    });
    toast.present();
  }


  // getCurrentBookings(listingID) {        //listings per host id
  //   debugger;
  //   this.currentBookings = [];
  //   this.bookingsService.getByListId(listingID).subscribe((response) => {
  //     Object.values(response).forEach((booking) => {
  //       this.currentBookings.push(new Booking(booking.id, booking.userID, booking.listingID, booking.dateStart, booking.dateEnd, booking.status))
  //       console.log(this.currentBookings);
  //       console.log("http get bookings successful");
  //       debugger;
  //     })
  //   });
  //   debugger;
  // }

}
