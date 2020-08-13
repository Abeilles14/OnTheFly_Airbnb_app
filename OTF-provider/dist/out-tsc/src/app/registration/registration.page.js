import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(router, navProvider) {
        this.router = router;
        this.navProvider = navProvider;
        this.creds = { firstname: null, lastname: null, email: null, password: null, phone: null };
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.register = function () {
        this.id = this.creds.lastname.substring(0, 2) + this.creds.firstname.substring(0, 2) + this.creds.phone.toString().substring(6, 10);
        //this.navProvider.newUser(this.creds.firstname, this.creds.lastname, this.creds.email, this.creds.password, this.creds.phone, this.id)
        this.router.navigate(['explore']);
    };
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, UserService])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map