// Arrays (with Map, Sort, etc Functions)
// -------------------------Accessing Array Elements-------------------------
// Example: Simple Array :-
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
console.log("");
// ----------------------------------------------------------------
// Example: Single statement declaration and initialization :-
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log("");
// ----------------------------------------------------------------
// -------------------------Array Object-------------------------
// |- An array can also be created using the Array object. The Array constructor can be passed.
// |-A numeric value that represents the size of the array or
// |-A list of comma separated values.
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
console.log("");
// ----------------------------------------------------------------
// Example: Array Constructor accepts comma separated values :-
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("");
// ----------------------------------------------------------------
// -------------------------Array Methods-------------------------
// 1 - concat() :- concat() method returns a new array comprised of this array joined with two or more arrays.
var alpha = ["a", "b", "c"];
var numerics, _a = [1, 2, 3];
var alphaNumeric = alpha.concat(numerics);
console.log("concat -> ", "alphaNumeric :- " + alphaNumeric);
console.log("");
// ----------------------------------------------------------------
// 2 - every() :- every() method tests whether all the elements in an array passes the test implemented by the provided function.
function isBigEnough(element, index, array) {
    return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("every -> ", "Test Value : " + passed);
console.log("");
// ----------------------------------------------------------------
// 2 - filter() :- filter() method creates a new array with all elements that pass the test implemented by the provided function.
function isBigEnoughh(element, index, array) {
    return element >= 10;
}
var passedd = [12, 5, 8, 130, 44].filter(isBigEnoughh);
console.log("Test Value : " + passedd);
console.log("");
// ----------------------------------------------------------------
// 2 - map() :- map() method creates a new array with the results of calling a provided function on every element in this array.
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots);
console.log("");
// ----------------------------------------------------------------
// 2 - reduce() :- reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
var total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
console.log("total is : " + total);
console.log("");
// ----------------------------------------------------------------
// 2 - forEach() :- forEach() method calls a function for each element in the array.
var num = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
});
console.log("");
// ----------------------------------------------------------------
// 2 - indexOf() :- indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log("index is : " + index);
console.log("");
// ----------------------------------------------------------------
// 2 - lastIndexOf() :- lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
var index = [12, 5, 8, 130, 44].lastIndexOf(8);
console.log("index is : " + index);
console.log("");
// ----------------------------------------------------------------
// 2 - join() :- join() method joins all the elements of an array into a string.
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str : " + str);
var str = arr.join(", ");
console.log("str : " + str);
var str = arr.join(" + ");
console.log("str : " + str);
console.log("");
// ----------------------------------------------------------------
// 2 - pop() :- pop() method removes the last element from an array and returns that element.
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is : " + element);
var element = numbers.pop();
console.log("element is : " + element);
console.log("");
// ----------------------------------------------------------------
// 2 - push() :- push() method appends the given element(s) in the last of the array and returns the length of the new array.
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers);
length = numbers.push(20);
console.log("new numbers is : " + numbers);
console.log("");
// ----------------------------------------------------------------
// 2 - reduceRight() :- reduceRight() method applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value
var total = [0, 1, 2, 3].reduceRight(function (a, b) {
    return a + b;
});
console.log("total is : " + total);
console.log("");
// ----------------------------------------------------------------
// 2 - reverse() :- reverse() method reverses the element of an array. The first array element becomes the last and the last becomes the first.
var arrr = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + arrr);
console.log("");
// ----------------------------------------------------------------
// 2 - shift() :- shift()method removes the first element from an array and returns that element.
var arry = [10, 1, 2, 3].shift();
console.log("Shifted value is : " + arry);
console.log("");
// ----------------------------------------------------------------
// 2 - unshift() :- unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr);
console.log("Length of the array is : " + length);
console.log("");
// ----------------------------------------------------------------
// 2 - slice() :- slice() method extracts a section of an array and returns a new array.
var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice( 1, 2) : " + arr.slice(1, 2));
console.log("arr.slice( 1, 3) : " + arr.slice(1, 3));
console.log("");
// ----------------------------------------------------------------
// 2 - splice() :- splice() method changes the content of an array, adding new elements while removing old elements.
var arr = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr.splice(2, 0, "water");
console.log("After adding 1: " + arr);
console.log("removed is: " + removed);
removed = arr.splice(3, 1);
console.log("After removing 1: " + arr);
console.log("removed is: " + removed);
console.log("");
// ----------------------------------------------------------------
// 2 - some() :- some() method tests whether some element in the array passes the test implemented by the provided function.
function isBigEnoughs(element, index, array) {
    return element >= 10;
}
var retval = [2, 5, 8, 1, 4].some(isBigEnoughs);
console.log("Returned value is : " + retval);
var retval = [12, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval);
console.log("");
// ----------------------------------------------------------------
// 2 - sort() :- sort() method sorts the elements of an array.
var arr = new Array("orange", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log("Returned string is : " + sorted);
console.log("");
// ----------------------------------------------------------------
// 2 - toString() :- toString() method returns a string representing the source code of the specified array and its elements.
var arr = new Array("orange", "mango", "banana", "sugar");
var str = arr.toString();
console.log("Returned string is : " + str);
console.log("");
// ----------------------------------------------------------------
