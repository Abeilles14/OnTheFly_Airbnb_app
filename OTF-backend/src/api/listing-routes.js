const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// get all // TESTED
router.get('/', (req,res) => {
    listingServer.findAllListings().then(listings => {
        res.json(listings);
    }).catch(err => {
        res.json(err);
    });
});

// get by id // TESTED
router.get('/:id', (req,res) => {
    listingServer.findListingById(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// create // TESTED
router.post('/create', (req,res) => {
    listingServer.createListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// delete // TESTED
router.delete('/delete/:hostID', (req,res) => {
    listingServer.deleteListing(req.params.hostID).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// update // TESTED
router.post('/update', (req,res) => {       //use PATCH??
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});



module.exports = router;