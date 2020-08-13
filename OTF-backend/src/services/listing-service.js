
const Listing = require("../models/listing");

module.exports = class ListingService {

    constructor() { }

    //find all listings
    findAllListings() {
        return new Promise((resolve, reject) => {
            Listing.findAllListings((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    //find by id
    findListingById(listingID) {
        return new Promise((resolve, reject) => {
            Listing.findListingById(listingID, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no listing found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    findListingByLocation(listingID) {
        return new Promise((resolve, reject) => {
            Listing.findListingById(listingID, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no listing found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }


    //new listing                       //doesn't deal with duplicates
    createListing(newListing) {
        return new Promise((resolve, reject) => {
            // Listing.findListingById(newListing.hostID, (err, res) => { // check if user exists
            //     if (err) {
            //         reject(err);
            //     }
            //     if (res.length < 1) { // create user
                    Listing.createListing(newListing, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
               // }
                // else {
                //     reject("booking already exists");
                // }
            //})
        });
    }

    //delete listing // TESTED
    deleteListing(hostID) {
        return new Promise((resolve, reject) => {
            Listing.findListingById(hostID, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    reject("listing does not exists");
                }
                else {
                    Listing.deleteListing(hostID, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
            })
        });
    }

    // update listing // TESTED
    updateListing(listing) {
        return new Promise((resolve, reject) => {
            Listing.findListingById(listing.hostID, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    reject("listing does not exists");
                }
                else {
                    Listing.updateListing(listing, listing.hostID, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
            })
        });
    }



}