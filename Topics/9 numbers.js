// Numbers (with Numbers Related Operations)
// TypeScript - Arithmetic Operators Examples
var num1 = 10;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log("Sum:        " + res);
res = num1 - num2;
console.log("Difference: " + res);
res = num1 * num2;
console.log("Product:    " + res);
res = num1 / num2;
console.log("Quotient:   " + res);
res = num1 % num2;
console.log("Remainder:   " + res);
num1++;
console.log("Value of num1 after increment " + num1);
num2--;
console.log("Value of num2 after decrement " + num2);
// --------------------------------------------------
// The following table lists a set of properties of the Number object −
console.log("");
console.log("TypeScript Number Properties:------- ");
console.log("Maximum value that a number letiable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number letiable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
// --------------------------------------------------
// Example: NaN :-
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
}
else {
    console.log("Value Accepted..");
}
// --------------------------------------------------
// Example: prototype :-
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
// ------------------------------Number Methods------------------------------
// 1 - Number toExponential() :- This method returns a string representing the number object in exponential notation.
//toExponential()
console.log("");
console.log("Number Methods :->");
var num = 1225.3;
var val = num.toExponential();
console.log("Method-1 ->", val);
// 2 - Number toFixed() :- This method formats a number with a specific number of digits to the right of the decimal.
var num3 = 177.234;
console.log("Method-2 ->", "num3.toFixed() is " + num3.toFixed());
console.log("Method-2 ->", "num3.toFixed(2) is " + num3.toFixed(2));
console.log("Method-2 ->", "num3.toFixed(6) is " + num3.toFixed(6));
// 3 - Number toLocaleString() :- This method converts a number object into a human readable string representing the number using the locale of the environment.
var numm = new Number(177.1234);
console.log("Method-3 ->", numm.toLocaleString());
// 4 - Number toPrecision() :- This method returns a string representing the number object to the specified precision.
var nummm = new Number(7.123456);
console.log("Method-4 ->", nummm.toPrecision());
console.log("Method-4 ->", nummm.toPrecision(1));
console.log("Method-4 ->", nummm.toPrecision(2));
// 5 -Number toString() :- This method returns a string representing the specified object. The toString() method parses its first argument, and attempts to return a string representation in the specified radix (base).
var nums = new Number(10);
console.log("Method-5 ->", nums.toString());
console.log("Method-5 ->", nums.toString(2));
console.log("Method-5 ->", nums.toString(8));
// 6 - Number valueOf() :- This method returns the primitive value of the specified number object.
var numss = new Number(10);
console.log("Method-6 ->", numss.valueOf());
