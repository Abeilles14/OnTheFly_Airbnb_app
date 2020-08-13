//Toast message, login authentification
//http data storage for login/reg, API calls
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var authenticating = /** @class */ (function () {
    function authenticating() {
    }
    return authenticating;
}());
var AuthService = /** @class */ (function () {
    //apiURL = "http://localhost:3000/api/";              //allows HTTP requests to be launged from anywhere
    // headers = new HttpHeaders({
    //   'Authentification: ': this.token["type"] + " " + this.token["access"]
    // })
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        console.log("in login auth service");
        this.http.post('http://localhost:5000/api/auth/login', {
            email: email, password: password
        }).subscribe(function (response) {
            if (response.success) {
                console.log("http posting successful");
                _this.token = response.data;
                _this.router.navigate(['main/tabs/location']);
            }
            else {
                //alert toast?
            }
            console.log(response);
        });
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    //TOAST                                       //promise?
    AuthService.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 1500,
                            position: 'top',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
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
//# sourceMappingURL=auth.service.js.map