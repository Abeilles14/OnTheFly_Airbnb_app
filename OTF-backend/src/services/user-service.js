const User = require("../models/user");

module.exports = class UserService {

    constructor() { }

    //find all
    findUsers() {
        return new Promise((resolve, reject) => {
            User.findAllUsers((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    //find by id
    findUserById(userID) {
        return new Promise((resolve, reject) => {
            User.findUserById(userID, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no user found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    //find by email
    findUserByEmail(email) {
        return new Promise((resolve, reject) => {
            User.findUserByEmail(email, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no user found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    //find by role
    findUserByRole(role) {
        return new Promise((resolve, reject) => {
            User.findUserByRole(role, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("no user found");
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    createUser(newUser) {
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
                            console.log("user created");
                            resolve(res);
                        }
                    })
                }
            })
        });
    }

    //by user id
    deleteUser(userID) {
        return new Promise((resolve, reject) => {
            User.deleteUser(userID, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    reject("user does not exist");
                }
                else {
                    resolve(res);
                }
            })
        });
    }

    // update listing
    updateUser(user) {
        return new Promise((resolve, reject) => {
            User.findUserById(user.id, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) {
                    reject("user does not exists");
                }
                else {
                    User.updateUser(user, user.id, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
            });
        });
    }

    // findByEmailPass(userInput, result) {
    //     console.log("insde user service");
    //     return new Promise((resolve, reject) => {
    //         User.findByEmailPass(userInput, (err,res) => {
    //             if (err) {
    //                 reject(err);
    //             }
    //             if (res.length < 1) { // create user
    //                 reject("no user found");
    //             }
    //             else {
    //                 console.log("found user!");
    //                 resolve(res);
    //             }
    //         });
    //     });
    // }
}
