const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const User = require("../models/user");

module.exports = class AuthService {
    constructor() { }

    login(userInput) {
        return new Promise((resolve, reject) => {
            User.findByEmailPass(userInput, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("Email or password incorrect");
                }
                else {
                    console.log("assigning a token");
                    let token = jwt.sign({ email: userInput.email },
                        config.secret,
                        {
                            expiresIn: '24h' // expires in 24 hours
                        }
                    );
                    // return the JWT token for the future API calls
                    resolve({
                        success: true,
                        message: 'Authentication successful!',
                        token: token
                    });
                    console.log("resolved");
                    console.log(token);
                }
            });
        });
    }

    register(newUser) {
        return new Promise((resolve, reject) => {
            User.findByEmailPass(newUser, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                else if (res.length > 0) { // create user
                    reject("user already exists");
                }
                else {
                    User.createUser(newUser, (err, res) => {
                        if (err) {
                            reject(err);
                        } else {
                            console.log("new user created");
                            resolve(true);
                        }
                    })
                }
            })
        });
    }
}






    // return new Promise((resolve, reject) => {
    //     User.createUser(user).then(user => {
    //         let token = jwt.sign({ email: email },
    //             config.secret,
    //             {
    //                 expiresIn: '24h' // expires in 24 hours
    //             }
    //         );
    //         resolve({
    //             success: true,
    //             message: 'Authentication successful!',
    //             token: token
    //         });

    //         //resolve(user); // resolve promise to return value
    //     }).catch(err => {
    //         reject(err); // reject error in promise
    //     });
    // });
