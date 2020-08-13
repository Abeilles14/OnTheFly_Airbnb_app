import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private userInfo: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUser();
  }
}
