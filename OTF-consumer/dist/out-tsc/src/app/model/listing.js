var Listing = /** @class */ (function () {
    function Listing(name, location, price, imgUrl) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.imgUrl = imgUrl;
    }
    Listing.prototype.getName = function () {
        return this.name;
    };
    Listing.prototype.setName = function (name) {
        this.name = name;
    };
    Listing.prototype.getLocation = function () {
        return this.location;
    };
    Listing.prototype.setLocation = function (location) {
        this.location = location;
    };
    Listing.prototype.getPrice = function () {
        return this.price;
    };
    Listing.prototype.setPrice = function (price) {
        this.price = price;
    };
    Listing.prototype.getImgUrl = function () {
        return this.imgUrl;
    };
    Listing.prototype.setImgUrl = function (imgUrl) {
        this.imgUrl = imgUrl;
    };
    return Listing;
}());
export { Listing };
//# sourceMappingURL=listing.js.map