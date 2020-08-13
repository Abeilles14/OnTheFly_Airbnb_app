import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<User>;
  callbackUsers=(users) => { this.users = users};
  
  constructor(private userService: UserService) { //add users array to constructor?

  }

  ngOnInit() {
    this.userService.setUsers(this.callbackUsers);
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  addUser() {                                                 //function clicked on page
    
  }

  deleteUser() {

  }


}
