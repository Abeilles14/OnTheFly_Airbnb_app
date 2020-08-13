import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MybookingsService } from '../service/mybookings.service';
import { UserService } from '../service/user.service'
import { ListingsService } from '../service/listings.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private router: Router, private bookingsService: MybookingsService, private userService: UserService, private listingsService: ListingsService) {

  }


  private bookingInfo = { userID: this.userService.getUserID(), listingID: this.listingsService.getListingID(), dateStart: '', dateEnd: '', status: "pending" };

  ngOnInit() {
  }

  post() {
    console.log(this.bookingInfo);
    this.bookingsService.newBooking(this.bookingInfo);
    this.router.navigateByUrl('/main/tabs/explore');
  }


}
