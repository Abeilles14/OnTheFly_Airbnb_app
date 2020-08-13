const Booking = require("../models/booking");

module.exports = class BookingService {

    constructor() { }

    //find all bookings
    findAllBookings() {
        return new Promise((resolve, reject) => {
            Booking.findAllBookings((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    //find by status
    findByStatus(status) {
        return new Promise((resolve, reject) => {
            Booking.findByStatus(id, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no booking found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    setStatusById(bookingID, status) {
        return new Promise((resolve, reject) => {
            Booking.findByBookingId(bookingID, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no booking found");
                }
                else {
                    Booking.setStatusById(bookingID, status, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    })
                }
            });
        });
    }

    findByListId(listingID) {
        return new Promise((resolve, reject) => {
            Booking.findByListId(listingID, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no booking found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    //find by listing id and status
    findByListIdStat(listingID, status) {
        return new Promise((resolve, reject) => {
            Booking.findByListIdStat(listingID, status, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no bookings found");
                }
                else {
                    resolve(res);
                }
            });

        });
    }

    //find by user id and status
    findByUserIdStat(userID, status) {
        return new Promise((resolve, reject) => {
            Booking.findByUserIdStat(userID, status, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no bookings found");
                }
                else {
                    resolve(res);
                }
            });

        });
    }

    //find by booking ID
    findByBookingId(id) {
        return new Promise((resolve, reject) => {
            Booking.findByBookingId(id, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no booking found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    //find by start and end date
    findByStartEndDateId(dateStart, dateEnd, listingID) {
        return new Promise((resolve, reject) => {
            Booking.findByStartEndDateId(dateStart, dateEnd, listingID, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    console.log("booking does not exist")
                }
                else {
                    resolve(res);
                }
            });
        });
    };

    // new booking  //check if already reserved on that date // later care about the status...
    createBooking(newBooking) {
        return new Promise((resolve, reject) => {
            Booking.findByStartEndDateId(newBooking.dateStart, newBooking.dateEnd, newBooking.listingID, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                } else if (res.length > 1) {

                    reject("booking already exists");
                }
                else {

                    Booking.createBooking(newBooking, (err, res) => {
                        if (err) {
                            reject(err);
                        } else {
                            console.log("new booking created");
                            resolve(res);
                        }
                    });

                }
            })
        });
    }

    // delete booking
    deleteBooking(id) {
        return new Promise((resolve, reject) => {
            console.log("in service");
            Booking.findByBookingId(id, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("booking does not exists");
                }
                else {
                    Booking.deleteBooking(id, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
            })
        });
    }

    //update booking
    updateBooking(booking) {
        return new Promise((resolve, reject) => {
            Booking.findByBookingId(booking.id, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("booking does not exists");
                }
                else {
                    Booking.updateBooking(booking, booking.id, (err, res) => {
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