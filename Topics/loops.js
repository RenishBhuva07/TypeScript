// Loops -> A loop statement allows us to execute a statement or group of statements multiple times.
// Types of Loops:
// --------------------------------------------------------------------------------------------------------------
// 1- Definite Loops :- A loop whose number of iterations are defined/fixed is called Definite Loop..
// |- For Loop:- The for loop is an implementation of a definite loop.
var num = 5;
var i;
var factorial = 1;
for (var i_1 = num; i_1 >= 1; i_1--) {
    // for factorial of 5
    factorial *= i_1;
}
console.log(factorial);
// |- For...In Loop :- The for… in loop can be used to iterate over a set of values as in the case of an array or a tuple.
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
// --------------------------------------------------------------------------------------------------------------
// 2- Indefinite Loops :- An indefinite loop is used when the number of iterations in a loop is indeterminate or unknown..
// |- While Loop:- The while loop executes the instructions each time the condition specified evaluates to true.
var numm = 10;
var facto = 1;
while (numm >= 1) {
    facto = facto * numm;
    numm--;
}
console.log("The factorial  is " + facto);
// |- Do...While Loop :- The do…while loop is similar to the while loop except that the do...while loop doesn’t evaluate the condition for the first time the loop executes.
var no = 10;
do {
    console.log(no);
    no--;
} while (no >= 0);
// Example: while versus do..while
var nummm = 5;
while (nummm > 5) {
    console.log("Entered while");
}
do {
    console.log("while versus do..while :-  Entered do…while - because do...while loops at least one time & the reason is the condition is at the end of the code");
} while (nummm > 5);
// The break Statement :- The break statement is used to take the control out of a construct. Using break in a loop causes the program to exit the loop. Its syntax is as follows −
var it = 1;
while (it <= 10) {
    if (it % 5 == 0) {
        console.log("The break Statement :- The first multiple of 5  between 1 and 10 is : " +
            it);
        break; //exit the loop if the first multiple is found
    }
    it++;
} //outputs 5 and exits the loop
// The continue Statement :- The continue statement skips the subsequent statements in the current iteration and takes the control back to the beginning of the loop. Unlike the break statement, the continue doesn’t exit the loop. It terminates the current iteration and starts the subsequent iteration.
var nom = 0;
var count = 0;
for (nom = 0; nom <= 20; nom++) {
    if (nom % 2 == 0) {
        continue;
    }
    count++;
}
console.log("The continue Statement :- The count of odd values between 0 and 20 is: " +
    count);
// The Infinite Loop :- An infinite loop is a loop that runs endlessly. The for loop and the while loop can be used to make an endless loop.
// Example: Infinite loop using for loop :-
// for (;;) {
//   console.log("For :- This is an endless loop");
// }
// Example: Infinite loop using while loop :-
// while (true) {
//   console.log("While :- This is an endless loop");
// }
