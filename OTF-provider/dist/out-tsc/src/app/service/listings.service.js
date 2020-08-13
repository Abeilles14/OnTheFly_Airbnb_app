import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';
var ListingsService = /** @class */ (function () {
    function ListingsService() {
        this.listingsList = []; //temp until make database?
        this.lisbon = new Listing('Back to Lisbon Hostel', 'Lisbon, Portugal', 80, 'https://back-to-lisbon.webnode.com/_files/200000035-d03b7d133f/room6-0.jpg');
        this.capetown = new Listing('Once in Cape Town', 'Cape Town, South Africa', 70, 'https://q-ec.bstatic.com/images/hotel/max1024x768/578/57834468.jpg');
        this.berlin = new Listing('PLUS Berlin', 'Berlin, Germany', 95, 'https://thumbnails.trvl-media.com/FNV_vYPdO4ecLpM4PP3NFBMyXm8=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/4000000/3790000/3783000/3782907/5b6d5e8d_y.jpg');
        this.listingsList = [this.lisbon, this.capetown, this.berlin];
    }
    ListingsService.prototype.newListing = function (name, location, price, imgUrl) {
        this.newPlace = new Listing(name, location, price, imgUrl);
        this.listingsList.push(this.placeInfo);
    };
    ListingsService.prototype.getListing = function () {
        return this.placeInfo;
    };
    ListingsService.prototype.getAllListings = function () {
    };
    ListingsService.prototype.editListing = function () {
    };
    ListingsService.prototype.deleteListing = function () {
    };
    ListingsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListingsService);
    return ListingsService;
}());
export { ListingsService };
//# sourceMappingURL=listings.service.js.map