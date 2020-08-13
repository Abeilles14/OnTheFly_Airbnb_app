import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ExplorePage.prototype.navigateToCreate = function () {
        this.router.navigate(['create']);
        //this.navCtrl.navigateForward("create")
    };
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: 'explore.page.html',
            styleUrls: ['explore.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, Router])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map