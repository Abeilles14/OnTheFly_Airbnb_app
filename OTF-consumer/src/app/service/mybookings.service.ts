import { Injectable } from '@angular/core';
import { Booking } from '../model/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListingsService } from './listings.service'
import { UserService } from './user.service'

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
  newMsg: string = "Completed new booking";

  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController, private listingsService: ListingsService, private userService: UserService) { }


  getAllBookings(): Booking[] {
    this.bookingsList = [];
    this.http.get('http://localhost:5000/api/bookings')
      .subscribe((response) => {
        Object.values(response).forEach((booking) => {
          this.bookingsList.push(new Booking(booking.id, booking.userID, booking.listingID, booking.dateStart, booking.dateEnd, booking.status))
        })
        console.log("http get all listings successful");
      });
    return this.bookingsList;
  }

  newBooking(bookingDetails) {
    console.log(this.userService.getUserID())
    console.log(this.listingsService.getListingID());
    this.http.post('http://localhost:5000/api/bookings/create', {
      userID: bookingDetails.userID, listingID: bookingDetails.listingID, dateStart: bookingDetails.dateStart, dateEnd: bookingDetails.dateEnd, status: bookingDetails.status
    }).subscribe((response: createBooking) => {
      if (response) {
        console.log("http posting successful");
        console.log(response);
        this.presentToast(this.newMsg);
      } else {
        console.log(response);
      }
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'top',
      color: 'light'
    });
    toast.present();
  }

}
