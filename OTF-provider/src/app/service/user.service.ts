//user service provider
//contains userList, creates new users from registration


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {                //should these be private??
  private user: User;
  private userBook: User;
  private userProfile: User;

  //apiURL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {   //private HTTP: HttpClient, 

  }

  setUserByEmail(email) {     //used at login to set user
    this.http.get('http://localhost:5000/api/users/email/' + email)
      .subscribe((data) => {
        console.log(email);
        this.user = new User(data[0].id, data[0].name, data[0].surname, data[0].email, data[0].password, data[0].role, data[0].phone);
        this.setUser(this.user);
        console.log(this.user);
      });
  }

  getUser() {
    return this.userProfile;
  }
  setUser(user) {
    this.userProfile = user;
  }

  getUserID() {
    console.log(this.user.getUserID() + "getting user id");
    return this.user.getUserID();
  }

  getUserById(userID, callbackUser) {
    this.http.get('http://localhost:5000/api/users/' + userID)
      .subscribe((user) => {
        console.log(userID);
        this.userBook = new User(user[0].id, user[0].name, user[0].surname, user[0].email, user[0].password, user[0].role, user[0].phone);
        this.setUser(this.user);
        callbackUser(this.userBook)
        console.log(this.user);
      });

    return this.userBook;
  }


  findUser() {
    // this.token = this.authService.getToken();
    // this.authService.headers;
    // return this.HTTP.get<User>(this.apiURL + 'auth/logout', { headers: this.authService.headers })
    //   .pipe(                     //can't use subscribe, use pipe!
    //     tap(response => {
    //       return response;
    //     })
    //   )
  }




  //user service: get user, update user info








}
