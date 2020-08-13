//access to database
var mySqlConn = require("../database/database");

//Task object constructor
var User = (user) => {
    //this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
    this.phone = user.phone;
};

User.findUserByRole = (role, result) => {
    mySqlConn.query("SELECT * from user WHERE role = ?", role, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}


User.findAllUsers = (result) => {
    mySqlConn.query("SELECT * from user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

User.findUserById = (userID, result) => {
    mySqlConn.query("SELECT * from user WHERE id = ?", userID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}


User.createUser = (newUser, result) => {
    mySqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("User added");
            result(null, res);
            
        }
    });
};

User.deleteUser = (id, result) => {
    mySqlConn.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("User deleted");
            result(null, res);
        }
    });
}

User.findByEmailPass = (loginDetails, result) => {
    mySqlConn.query("SELECT * from user WHERE email = ? AND password = ?", [loginDetails.email, loginDetails.password], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findUserByEmail = (email, result) => {
    mySqlConn.query("SELECT * from user WHERE email = ?", email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.updateUser = (updatedUser, id, result) => {
    mySqlConn.query("UPDATE user SET ? WHERE id = ?", [updatedUser, id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("User updated");
            result(null, res);
        }
    });
}

module.exports = User;


    // User.findUserByName = (userName, result) => {
    //     mySqlConn.query("Select * from user where name = ?", userName, (err, res) => {
    //         if (err) {
    //         console.log("error: ", err);
    //         result(err, null);
    //         } else {
    //         console.log(res);
    //         result(null, res);
    //         }
    //     });
    // };