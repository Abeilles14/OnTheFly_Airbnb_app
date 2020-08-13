import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        console.log("login constructer called");
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        console.log("login button clicked");
        this.authService.login(this.email, this.password);
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpClient, AuthService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map