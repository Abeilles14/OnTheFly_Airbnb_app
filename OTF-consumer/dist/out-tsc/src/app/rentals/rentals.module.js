import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RentalsPage } from './rentals.page';
var routes = [
    {
        path: '',
        component: RentalsPage
    }
];
var RentalsPageModule = /** @class */ (function () {
    function RentalsPageModule() {
    }
    RentalsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RentalsPage]
        })
    ], RentalsPageModule);
    return RentalsPageModule;
}());
export { RentalsPageModule };
//# sourceMappingURL=rentals.module.js.map