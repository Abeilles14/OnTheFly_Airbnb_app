import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { registerContentQuery } from '@angular/core/src/render3';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  private creds = { name: '', surname: '', email: '', password: '', phone: null };

  constructor(private authService: AuthService) {
    console.log("register constructor called");
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.creds);
    
  }


}
