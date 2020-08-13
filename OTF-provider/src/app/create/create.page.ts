import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service'
import { ListingsService } from '../service/listings.service'



@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private router: Router, private listingsService: ListingsService, private userService: UserService) {

  }


  private listingInfo = { hostID: this.userService.getUserID(), title: '', location: '', description: '', numberOfPeople: null, pricePerNight: null, imgURL: '' };

  ngOnInit() {
  }

  post() {
    console.log(this.listingInfo);
    this.listingsService.newListing(this.listingInfo);
    this.router.navigateByUrl('/main/tabs/explore');
  }


}
