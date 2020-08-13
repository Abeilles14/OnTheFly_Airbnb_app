//access to database
var mySqlConn = require("../database/database");

//Task object constructor
var Listing = (listing) => {
    this.title = listing.title;
    this.location = listing.location;
    this.description = listing.description;
    this.numberOfPeople = listing.numberOfPeople;
    this.pricePerNight = listing.pricePerNight;
    this.imgURL = listing.imgURL;
    this.hostID = listing.hostID;
};

Listing.findAllListings = (result) => {
    mySqlConn.query("Select * from listing", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}

Listing.findListingById = (listingID, result) => {
    mySqlConn.query("Select * from listing where hostID = ?", listingID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}

Listing.createListing = (newListing, result) => {
    mySqlConn.query("INSERT INTO listing SET ?", newListing, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Listing created");
            result(null, res);
        }
    });
}

Listing.deleteListing = (hostID, result) => {
    mySqlConn.query("DELETE FROM listing WHERE hostID = ?", hostID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("listing has been deleted");
            result(null, res);
        }
    });
}

Listing.updateListing = (updatedListing, hostID, result) => {
    // mySqlConn.query("UPDATE listing SET title = ?, SET location = ?, SET description = ?, " +
    // "SET numberOfPeople = ?, SET pricePerNight = ?, SET imgURL = ? WHERE hostID = ?",
    mySqlConn.query("UPDATE listing SET ? WHERE hostID = ?", [updatedListing, hostID], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Listing updated");
            result(null, res);
        }
    });
}

module.exports = Listing;