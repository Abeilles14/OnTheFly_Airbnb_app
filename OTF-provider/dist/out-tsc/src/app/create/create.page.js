import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../service/listings.service';
var CreatePage = /** @class */ (function () {
    function CreatePage(router, navProvider) {
        this.router = router;
        this.navProvider = navProvider;
    }
    CreatePage.prototype.ngOnInit = function () {
    };
    // temp(){                                           //temp!! remove
    //   this.router.navigate(['explore']);
    // }
    CreatePage.prototype.post = function () {
        this.navProvider.newListing(this.name, this.location, this.price, this.imgUrl);
        this.router.navigate(['explore']);
    };
    CreatePage = tslib_1.__decorate([
        Component({
            selector: 'app-create',
            templateUrl: './create.page.html',
            styleUrls: ['./create.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ListingsService])
    ], CreatePage);
    return CreatePage;
}());
export { CreatePage };
//# sourceMappingURL=create.page.js.map