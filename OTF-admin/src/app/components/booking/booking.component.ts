import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings: Array<Booking> = [];
  callbackBookings=(bookings) => { this.bookings = bookings};

  constructor(private bookingsService: BookingsService) { //add users array to constructor?

  }

  ngOnInit() {
    this.bookingsService.setBookings(this.callbackBookings);
    this.bookings= this.bookingsService.getBookings();
    console.log(this.bookings);
  }

  addBooking() {                                                 //function clicked on page

  }

  deleteBooking() {

  }


}


