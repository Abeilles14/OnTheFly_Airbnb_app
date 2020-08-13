import { Component, OnInit } from '@angular/core';
import { Listing } from '../model/listing';
import { Router} from '@angular/router'
import { ListingsService } from '../service/listings.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.page.html',
  styleUrls: ['./rentals.page.scss'],
})
export class RentalsPage implements OnInit {      //need to add back button and tabs at bottom
  listing: Listing;
  listingID: string;

  constructor(private router: Router, private listingsService: ListingsService) { }

  ngOnInit() {
    this.listing = this.listingsService.getListing();
    console.log(this.listing);
  }

  navToCreate() {
    this.router.navigate(['create']);
  }

}
