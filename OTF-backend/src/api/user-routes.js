const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const userServer = new UserService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    userServer.findUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// get by id // TESTED
router.get('/:id', (req,res) => {
    userServer.findUserById(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// get by role // TESTED
router.get('/role/:role', (req,res) => {
    console.log("in");
    userServer.findUserByRole(req.params.role).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// get by email // TESTED
router.get('/email/:email', (req,res) => {
    userServer.findUserByEmail(req.params.email).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// create // TESTED
router.post('/create', (req,res) => {
    userServer.createUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// delete // TESTED
router.delete('/delete/:id', (req,res) => {
    userServer.deleteUser(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// update // TESTED
router.post('/update', (req,res) => {
    userServer.updateUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;