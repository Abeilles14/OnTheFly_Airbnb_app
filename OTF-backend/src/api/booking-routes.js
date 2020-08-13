const express = require('express');
const router = express.Router();

const BookingService = require('../services/booking-service');
const bookingServer = new BookingService();

// get all // TESTED
router.get('/', (req,res) => {
    bookingServer.findAllBookings().then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});


// get by listing id and status // TESTED
router.get('/listing/:listingID/:status', (req,res) => {
    console.log("listing");
    bookingServer.findByListIdStat(req.params.listingID, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by listing id // TESTED
router.get('/listing/:listingID', (req,res) => {
    bookingServer.findByListId(req.params.listingID).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by user id and status // TESTED
router.get('/user/:userID/:status', (req,res) => {
    bookingServer.findByUserIdStat(req.params.userID, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by start end date and listing ID // TESTED
router.get('/date/:dateStart/:dateEnd/:listingID', (req,res) => {
    bookingServer.findByStartEndDateId(req.params.dateStart, req.params.dateEnd, req.params.listingID).then(booking => {
        console.log("Finished finding");
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by booking id // TESTED
router.get('/:id', (req,res) => {
    bookingServer.findByBookingId(req.params.id).then(booking=> {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get by status
router.get('/:status', (req,res) => {
    bookingServer.findBystatus(req.params.status).then(booking=> {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// create // TESTED
router.post('/create', (req,res) => {
    bookingServer.createBooking(req.params.bookingID, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// set status // TESTED
router.put('/status', (req,res) => {
    console.log("inside routes");
    bookingServer.setStatusById(req.body.id, req.body.status).then(booking => {
        console.log(booking);
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// delete // TESTED
router.delete('/delete/:id', (req,res) => { 
    console.log("in router");
    bookingServer.deleteBooking(req.params.id).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// update //
router.post('/update', (req,res) => {
    bookingServer.updateBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});


module.exports = router;