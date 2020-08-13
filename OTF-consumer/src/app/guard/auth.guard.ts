import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private alertController: AlertController, private router: Router) {

  }

  canActivate() {
    if (this.authService.getLoggedInStatus()) {
      return true;
    }
    else {
      this.alertController.create({
        header: "Sorry",
        subHeader: "You are unable to access this path",
        message: "Please login or register",
        buttons: ["OK"]
      }).then(alert => alert.present());
      this.router.navigate(['login']);
      return false;
    }
  }

}