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
let Person = {
  firstname: "Tom",
  lastname: "Hanks",
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
  sayHello: function () {}, //Type template
};

person.sayHello = function () {
  console.log("Hello " + person.firstName);
};
person.sayHello();
console.log("");

// --------------------------------------------------------------
// Example: Objects as function parameters :--------------->
let per = {
  firstname: "John",
  lastname: "Doe",
};
let invokePer = function (obj: { firstname: string; lastname: string }) {
  console.log("First Name : " + obj.firstname);
  console.log("Last Name : " + obj.lastname);
};
invokePer(per);
console.log("");
// --------------------------------------------------------------
// Example: Anonymous Object :--------------->
let invokePerson = function (obj: { firstname: string; lastname: string }) {
  console.log("firstname: " + obj.firstname);
  console.log("lastname: " + obj.lastname);
};

invokePerson({ firstname: "Sachin", lastname: "Tendulkar" });
console.log("");
// --------------------------------------------------------------
// Duck-typing :--------------->
// |- In duck-typing, two objects are considered to be of the same type if both share the same set of properties. Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability.
// |- The concept is generally explained by the following phrase −
// |- “When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.”
interface IPoint {
  x: number;
  y: number;
}

function addPoints(p1: IPoint, p2: IPoint): IPoint {
  let x = p1.x + p2.x;
  let y = p1.y + p2.y;
  return { x: x, y: y };
}

//Valid
let newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });

//Error
let newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 });
// --------------------------------------------------------------
