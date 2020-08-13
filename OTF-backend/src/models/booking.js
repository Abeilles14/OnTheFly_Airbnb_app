//access to database
var mySqlConn = require("../database/database");

//Task object constructor
var Booking = (booking) => {
    //this.id = booking.id;
    this.dateStart = booking.start;
    this.dateEnd = booking.end;
    this.hostID = booking.hostID;
    this.userID = booking.userID;
    this.status = booking.status;
};

Booking.findAllBookings = (result) => {
    mySqlConn.query("Select * from booking", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}


Booking.findByListIdStat = (hostID, status, result) => {
    console.log("in booking");
    mySqlConn.query("Select * from booking where id = ? AND status = ?", [hostID, status], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}

Booking.findByUserIdStat = (userID, status, result) => {
    mySqlConn.query("Select * from booking where userID = ? AND status = ?", [userID, status], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
}

Booking.findByBookingId = (id, result) => {
    mySqlConn.query("Select * from booking where id = ?", id, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
}

Booking.findByListId = (listingID, result) => {
    mySqlConn.query("Select * from booking where listingID = ?", listingID, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
}


Booking.setStatusById = (bookingID, status, result) => {
    console.log("inside booking")
    mySqlConn.query("UPDATE booking SET status = ? WHERE id = ?", [ status, bookingID], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
}

Booking.findByStatus = (status, result) => {
    mySqlConn.query("Select * from booking where status = ?", status, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
}

Booking.findByStartEndDateId = (dateStart, dateEnd, listingID, result) => {
    mySqlConn.query("Select * from booking where dateStart = ? AND dateEnd = ? AND listingID = ?", [dateStart, dateEnd, listingID], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
}

Booking.createBooking = (newBooking) => {
    console.log(newBooking)
    mySqlConn.query("INSERT INTO booking set ?", newBooking, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log("booking created");
        //result(null, res);                //result was returning undefined...
        }

    });
}

Booking.deleteBooking = (bookingID) => {
    console.log("in booking");
    mySqlConn.query("DELETE FROM booking WHERE id = ?", bookingID, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log("booking deleted");
        result(null, res);
        }
    });
}

Booking.updateBooking = (updatedBooking, bookingID, result) => {
    mySqlConn.query("UPDATE booking SET ? WHERE id = ?", [updatedBooking, bookingID], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log("Booking updated");
        result(null, res);
        }
    });
}


module.exports = Booking;