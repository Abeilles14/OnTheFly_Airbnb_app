import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  navItems: Array<any> = [
    {
      name: 'Home',
      rout: '/home'
    },
    {
      name: 'Users',
      rout: '/user'
    },
    {
      name: 'Bookings',
      rout: '/booking'
    },
    {
      name: 'Listings',
      rout: '/listing'
    }
  ]

  constructor( private router: Router) { }

  ngOnInit() {
     this.router.navigate(['/home']);
  }
  
  navTo(page) {
    this.router.navigate([page.rout]);
  }

}
