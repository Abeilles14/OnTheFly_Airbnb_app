import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string;
  private password: string;

  constructor(private authService: AuthService) {
    console.log("login constructer called")
  }

  ngOnInit() {
  }

  login() {
    console.log("login button clicked");
    this.authService.login(this.email,this.password);
  }

  // checkCreds() {              //temp check creds & validation until database made
  //   const authReq = {
  //     email: this.email,
  //     password: this.password
  //   }
  //   this.navigateToExplore();
  // }


}
