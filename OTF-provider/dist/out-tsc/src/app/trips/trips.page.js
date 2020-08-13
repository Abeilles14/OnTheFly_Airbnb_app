import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TripsPage = /** @class */ (function () {
    function TripsPage(router) {
        this.router = router;
        this.lisbon = "lisbon";
        this.rentals = [];
        this.rentals.push("lisbon");
    }
    TripsPage.prototype.navigateToExplore = function () {
        this.router.navigate(['main/tabs/explore']);
    };
    TripsPage.prototype.navigateToRentals = function () {
        this.router.navigate(['rentals']);
    };
    TripsPage = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: 'trips.page.html',
            styleUrls: ['trips.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TripsPage);
    return TripsPage;
}());
export { TripsPage };
//# sourceMappingURL=trips.page.js.map