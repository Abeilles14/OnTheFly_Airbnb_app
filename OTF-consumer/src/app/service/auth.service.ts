//Toast message, login authentification
//http data storage for login/reg, API calls

import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from './user.service'

class authenticating {
  success: boolean;
  message: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: any;
  logMsg: string = "Email or password incorrect";
  regMsg: string = "Email is already registered";
  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController, private userService: UserService) {   //private storage: Storage  //private HTTP: HttpClient, 

  }

  login(email: string, password: string) {
    this.http.post('http://localhost:5000/api/auth/login', {
      email: email, password: password
    }).subscribe((response: authenticating) => {
      if (response.success) {
        console.log("http posting successful");
        this.token = response.data;
        this.isLoggedIn = true;
        this.userService.setUserByEmail(email);                 //to be able to access user info later
        this.router.navigate(['main/tabs/location']);
      } else {
        this.presentToast(this.logMsg);
      }
      console.log(response);
    });
  }

  register(userDetails) {
    this.http.post('http://localhost:5000/api/auth/register', {
      name: userDetails.name, surname: userDetails.surname, email: userDetails.email, password: userDetails.password, phone: userDetails.phone, role: "user"
    }).subscribe((response: authenticating) => {
      if (response) {
        console.log("http posting successful");
        this.login(userDetails.email, userDetails.password);
      } else {

        console.log(response);
        this.presentToast(this.regMsg);
      }
    });
  }



  // TOAST // TESTED!
  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }



  getLoggedInStatus() {
    return this.isLoggedIn;
  }


  getToken(): string {
    return this.token
  }

}



    // const authReq = { email, password };                       //.subscribe= grab response from request

    // return this.HTTP.post(this.apiURL + 'auth/login', authReq)
    //   .pipe(                                                    //calls for authReq, pipe Observables through tokens/error handler
    //     tap(token => {                              //.subscribe vs pipe?
    //       this.storage.set('TOKEN', token);             //set token with TOKEN key

    //       this.token = token;
    //       this.loggedIn = true;
    //       return token;
    //     })
    //   );




  // getToken() {
  //   return this.storage.get('TOKEN'),
  //     logToken => {
  //       this.token = logToken;
  //       if (this.token == null) {
  //         this.loggedIn = false;
  //       }
  //     },
  //     (err) => {
  //       this.token = null;
  //       this.loggedIn = false;
  //     }
  // }

