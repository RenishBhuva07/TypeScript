var Youtube = /** @class */ (function () {
    function Youtube() {
    }
    Youtube.prototype.gerFirstname = function () {
        console.log("My FirstName is " + this.firstname);
    };
    Youtube.prototype.getLastname = function () {
        console.log("My LastName is " + this.lastname);
    };
    Youtube.prototype.getFullName = function () {
        console.log("My Full Name is " + this.firstname + " " + this.lastname + ".");
    };
    Youtube.prototype.getAge = function () {
        console.log("My Age is " + this.age);
    };
    return Youtube;
}());
var ytobj = new Youtube();
ytobj.firstname = "Renish";
ytobj.gerFirstname();
ytobj.lastname = "Bhuva";
ytobj.getLastname();
ytobj.getFullName();
ytobj.age = 21;
ytobj.getAge();
