//user service provider
//contains userList, creates new users from registration
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from './auth.service';
var UserService = /** @class */ (function () {
    function UserService(authService) {
        this.authService = authService;
        this.apiURL = "http://localhost:3000/api/";
    }
    UserService.prototype.newUser = function (fname, lname, email, password, phone, id) {
        this.addUser = new User(fname, lname, email, password, phone, id);
        console.log("new user created: " + this.addUser.getFname());
        //push new user onto database!
    };
    UserService.prototype.findUser = function () {
        // this.token = this.authService.getToken();
        // this.authService.headers;
        // return this.HTTP.get<User>(this.apiURL + 'auth/logout', { headers: this.authService.headers })
        //   .pipe(                     //can't use subscribe, use pipe!
        //     tap(response => {
        //       return response;
        //     })
        //   )
    };
    UserService.prototype.getUser = function () {
        // this.findUser().subscribe(
        //   user => {
        //     this.user = user;
        //   }
        // );
        return this.user;
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map