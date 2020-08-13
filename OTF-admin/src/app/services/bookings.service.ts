import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ListingsService } from './listings.service'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  public bookings: Array<Booking> = [];

  constructor(private http: HttpClient, private userService: UserService) { }

  setBookings(callbackBookings) {
    this.bookings = [];
    this.http.get('http://localhost:5000/api/bookings')
    .subscribe((response) => {
      Object.values(response).forEach((allBookings) => {
        this.bookings.push(new Booking(allBookings.id, allBookings.userID, allBookings.listingID, allBookings.dateStart, allBookings.dateEnd, allBookings.status))
        callbackBookings(this.bookings);
        console.log(this.bookings);
      });
      console.log("http get all users successful");
    });
  }

  getBookings() :Booking []{
    return this.bookings;
  }

  newBooking(bookingDetails) {
    this.http.post('http://localhost:5000/api/bookings/create', {
      userID: bookingDetails.userID, listingID: bookingDetails.listingID, dateStart: bookingDetails.dateStart, dateEnd: bookingDetails.dateEnd, status: bookingDetails.status
    }).subscribe((response) => {
      if (response) {
        console.log("http posting successful");
        console.log(response);
      } else {
        console.log(response);
      }
    });
  }

  deleteBooking() {

  }

  updateBooking() {

  }

}
