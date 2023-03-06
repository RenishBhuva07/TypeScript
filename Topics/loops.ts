// Loops -> A loop statement allows us to execute a statement or group of statements multiple times.

// Types of Loops:
// --------------------------------------------------------------------------------------------------------------
// 1- Definite Loops :- A loop whose number of iterations are defined/fixed is called Definite Loop..
// |- For Loop:- The for loop is an implementation of a definite loop.
let num: number = 5;
let i: number;
let factorial: number = 1;

for (let i = num; i >= 1; i--) {
  // for factorial of 5
  factorial *= i;
}
console.log(factorial);

// |- For...In Loop :- The for… in loop can be used to iterate over a set of values as in the case of an array or a tuple.
var j: any;
var n: any = "a b c";

for (j in n) {
  console.log(n[j]);
}

// --------------------------------------------------------------------------------------------------------------
// 2- Indefinite Loops :- An indefinite loop is used when the number of iterations in a loop is indeterminate or unknown..
// |- While Loop:- The while loop executes the instructions each time the condition specified evaluates to true.
var numm: number = 10;
var facto: number = 1;

while (numm >= 1) {
  facto = facto * numm;
  numm--;
}
console.log("The factorial  is " + facto);

// |- Do...While Loop :- The do…while loop is similar to the while loop except that the do...while loop doesn’t evaluate the condition for the first time the loop executes.
var no: number = 10;
do {
  console.log(no);
  no--;
} while (no >= 0);

// Example: while versus do..while
var nummm: number = 5;
while (nummm > 5) {
  console.log("Entered while");
}
do {
  console.log(
    "while versus do..while :-  Entered do…while - because do...while loops at least one time & the reason is the condition is at the end of the code"
  );
} while (nummm > 5);

// The break Statement :- The break statement is used to take the control out of a construct. Using break in a loop causes the program to exit the loop. Its syntax is as follows −
var it: number = 1;
while (it <= 10) {
  if (it % 5 == 0) {
    console.log(
      "The break Statement :- The first multiple of 5  between 1 and 10 is : " +
        it
    );
    break; //exit the loop if the first multiple is found
  }
  it++;
} //outputs 5 and exits the loop

// The continue Statement :- The continue statement skips the subsequent statements in the current iteration and takes the control back to the beginning of the loop. Unlike the break statement, the continue doesn’t exit the loop. It terminates the current iteration and starts the subsequent iteration.
var nom: number = 0;
var count: number = 0;

for (nom = 0; nom <= 20; nom++) {
  if (nom % 2 == 0) {
    continue;
  }
  count++;
}
console.log(
  "The continue Statement :- The count of odd values between 0 and 20 is: " +
    count
);

// The Infinite Loop :- An infinite loop is a loop that runs endlessly. The for loop and the while loop can be used to make an endless loop.

// Example: Infinite loop using for loop :-
// for (;;) {
//   console.log("For :- This is an endless loop");
// }

// Example: Infinite loop using while loop :-
// while (true) {
//   console.log("While :- This is an endless loop");
// }
