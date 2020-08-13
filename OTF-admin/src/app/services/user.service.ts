//user service provider
//contains userList, creates new users from registration


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {                //should these be private??
  private users: Array<User>;
  private addUser: User;


  constructor(private http: HttpClient) {   //private HTTP: HttpClient, 

  }

  setUsers(callbackUsers){
    this.users = [];
    this.http.get('http://localhost:5000/api/users')
    .subscribe((response) => {
      Object.values(response).forEach((allUsers) => {
        this.users.push(new User(allUsers.id, allUsers.name, allUsers.surname, allUsers.role, allUsers.email, allUsers.password, allUsers.phone))
        callbackUsers(this.users);
        console.log(this.users);
      });
      console.log("http get all users successful");
    });
  }

getUsers() :User []{
  return this.users;
}

  newUser(userDetails) {
    this.http.post('http://localhost:5000/api/auth/register', {
      name: userDetails.name, surname: userDetails.surname, email: userDetails.email, password: userDetails.password, phone: userDetails.phone, role: "user"
    }).subscribe((response) => {
      if (response) {
        console.log("http posting successful");
      } else {
        console.log(response);
        (err) => {
          console.log(err);
          alert(err.error.message);
        }
      }
    });
  }

  deleteUser(){

  }

  updateUser(){

  }

}
