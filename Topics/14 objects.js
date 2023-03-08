// ------------------------------OBJECTS------------------------------
// |- An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below −
// Syntax
// var object_name = {
//    key1: “value1”, //scalar value
//    key2: “value”,
//    key3: function() {
//       //functions
//    },
//    key4:[“content1”, “content2”] //collection
// };
// --------------------------------------------------------------
// Example: Object Literal Notation :--------------->
var Person = {
    firstname: "Tom",
    lastname: "Hanks"
};
// access the object value
console.log(Person.firstname);
console.log(Person.lastname);
console.log("");
// --------------------------------------------------------------
// TypeScript Type Template :--------------->
var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { }
};
person.sayHello = function () {
    console.log("Hello " + person.firstName);
};
person.sayHello();
console.log("");
// --------------------------------------------------------------
// Example: Objects as function parameters :--------------->
var per = {
    firstname: "John",
    lastname: "Doe"
};
var invokePer = function (obj) {
    console.log("First Name : " + obj.firstname);
    console.log("Last Name : " + obj.lastname);
};
invokePer(per);
console.log("");
// --------------------------------------------------------------
// Example: Anonymous Object :--------------->
var invokePerson = function (obj) {
    console.log("firstname: " + obj.firstname);
    console.log("lastname: " + obj.lastname);
};
invokePerson({ firstname: "Sachin", lastname: "Tendulkar" });
console.log("");
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
//Valid
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
//Error
var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 });
// --------------------------------------------------------------
