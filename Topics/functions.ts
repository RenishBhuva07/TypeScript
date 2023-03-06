// Functions :- Functions are the building blocks of readable, maintainable, and reusable code.

// Syntax :-
// function  function_name() {
//     // function body
//  }
// ------------------------------
// Calling a Function :-
function test() {
  console.log("function called");
}
test(); // function calling

// ------------------------------
// Returning a Function :-
function greet(): string {
  //the function returns a string
  return "Hello Renish Bhuva";
}
function caller() {
  let greetMsg = greet(); //function greet() called
  console.log(greetMsg);
}
// call function
caller();

// ------------------------------
// Parameterized a Function :-
function test_param(n1: number, s1: string) {
  console.log(n1);
  console.log(s1);
}
test_param(123, "this is a string");

// ------------------------------
// Optional Parameters :-
// |-Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution.
// |-A parameter can be marked optional by appending a question mark to its name.
// |-The optional parameter should be set as the last argument in a function.

function disp_details(id: number, name: string, mail_id?: string) {
  //mail_id is a optional paramter
  console.log("ID:", id);
  console.log("Name", name);

  if (mail_id != undefined) console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");

// ------------------------------
// Rest Parameters :-
function addNumbers(...nums: number[]) {
  let i;
  let sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers -", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);

// ------------------------------
// Default Parameters :-
// |-Function parameters can also be assigned values by default. However, such parameters can also be explicitly passed values.
// |- Note − A parameter cannot be declared optional and default at the same time.
function calculate_discount(price: number, rate: number = 0.5) {
  //number=0.5 is defalut value
  let discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);

// ------------------------------
// Anonymous Function :- Functions that are not bound to an identifier (function name) are called as anonymous functions.
let msg = function () {
  return "Hello Renish";
};
console.log(msg());

// Example ─ Anonymous function with parameters :-
let res = function (a: number, b: number) {
  return a * b;
};
console.log(res(12, 2));

// ------------------------------
// The Function Constructor :-
// |- The new Function() is a call to the constructor which in turn creates and returns a function reference.
// |- TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().
let myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
console.log(x);

// ------------------------------
// Recursion and TypeScript Functions :-
// |- Recursion is a technique for iterating over an operation by having a function call to itself repeatedly until it arrives at a result.
// |- Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop.

// Example - Recursion :-
function factorial(number) {
  if (number <= 0) {
    // termination case
    return 1;
  } else {
    return number * factorial(number - 1); // function invokes itself
  }
}
console.log(factorial(6)); // outputs 720

// Example: Anonymous Recursive Function :-
(function () {
  let x = "The function called itself using a pair of parentheses () !!";
  console.log(x);
})(); // the function called itself using a pair of parentheses ()

// ------------------------------
// Lambda Expression :-
// |- It is an anonymous function expression that points to a single line of code. Its syntax is as follows −
let foo = (x: number) => 10 + x;
console.log(foo(100)); //outputs 110

// ------------------------------
// Lambda Statement :-
// |- Lambda statement is an anonymous function declaration that points to a block of code.
// |-This syntax is used when the function body spans multiple lines. Its syntax is as follows −
var fooo = (x: number) => {
  x = 20 + x;
  console.log(x);
};
fooo(100);

// -------------------------------------------------------
// Syntactic Variations :-

// -----------------------------------
// Parameter type Inference :-
// |- It is not mandatory to specify the data type of a parameter.
// |- In such a case the data type of the parameter is any. Let us take a look at the following code snippet −
var func = (x) => {
  if (typeof x == "number") {
    console.log(x + " is numeric");
  } else if (typeof x == "string") {
    console.log(x + " is a string");
  }
};
func(12);
func("Tom");

// -----------------------------------
// Optional parentheses for a single parameter :-
var display = (x) => {
  console.log("The function got " + x);
};
display(12);

// -----------------------------------
// Optional braces for a single statement, Empty parentheses for no parameter :-
// |- The following example shows these two Syntactic variations.
var disp = () => {
  console.log("Function invoked");
};
disp();

// -------------------------------------------------------
// Function Overloads :-
function dispp(s1: string): void;
function dispp(n1: number, s1: string): void;

function dispp(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
dispp("abc");
dispp(1, "xyz");
