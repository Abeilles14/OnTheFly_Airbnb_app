const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

// login // TESTED with backend API
router.post('/login', (req, res) => {
    authServe.login(req.body).then(token => {
        console.log("login successful");
        res.json(token);
    }).catch(err => {
        res.json({
            success: false,
            message: err
        });
    });
});

// register // TESTED with backend API
router.post('/register', (req, res) => {
    authServe.register(req.body).then(user => {
        console.log("user registered successfully");
        res.json(user);
    }).catch(err => {
        res.json(err);
    },

        // authServe.login(req.body).then(token => {
        //     console.log("login successful");
        //     res.json(token);
        // }).catch(err => {
        //     res.json({
        //         success: false,
        //         message: err
        //     });
        // })

    );
});

module.exports = router;