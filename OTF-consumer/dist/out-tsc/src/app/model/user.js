var User = /** @class */ (function () {
    function User(Fname, Lname, email, passW, phone, id) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.email = email;
        this.passW = passW;
        this.phone = phone;
        this.id;
    }
    User.prototype.getFname = function () {
        return this.Fname;
    };
    User.prototype.setFname = function (Fname) {
        this.Fname = Fname;
    };
    User.prototype.getLname = function () {
        return this.Lname;
    };
    User.prototype.setLname = function (Lname) {
        this.Lname = Lname;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getPassW = function () {
        return this.passW;
    };
    User.prototype.setPassW = function (passW) {
        this.passW = passW;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    return User;
}());
export { User };
//# sourceMappingURL=user.js.map