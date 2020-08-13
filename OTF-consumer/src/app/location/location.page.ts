import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {


  //location: string;

  constructor(private router: Router) { }

  navTo() {
    this.router.navigate(['/main/tabs/explore']);
  }

}
