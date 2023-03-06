// Strings (with String Manipulation Functions)
// |- In TypeScript, the string is an object which represents the sequence of character values.
// |- It is a primitive data type which is used to store text data.
// |- The string values are surrounded by single quotation mark or double quotation mark.
// |- An array of characters works the same as a string.
// => A list of the methods available in String object along with their description is given below − :-
// String Constructor Property :-
// |- Returns a reference to the String function that created the object.
var str = new String("This is string");
console.log("str.constructor is:" + str.constructor);
console.log("");
// -------------------------------------------------------
// String Length Property :-
// |- Returns the length of the string.
var uname = new String("Hello World");
console.log(uname);
console.log("Length " + uname.length); // returns the total number of characters
// including whitespace
console.log("");
// -------------------------------------------------------
// String Prototype property :-
// |- The prototype property allows you to add properties and methods to an object.
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
console.log("");
// -------------------------------------------------------
// --------------------------------------------------String Methods--------------------------------------------------
// 1 - String charAt() :-
var strr = new String("This is string");
console.log("strr.charAt(0) is:" + strr.charAt(0));
console.log("strr.charAt(1) is:" + strr.charAt(1));
console.log("strr.charAt(2) is:" + strr.charAt(2));
console.log("strr.charAt(3) is:" + strr.charAt(3));
console.log("strr.charAt(4) is:" + strr.charAt(4));
console.log("strr.charAt(5) is:" + strr.charAt(5));
console.log("");
// -------------------------------------------------------
// 2 - String charCodeAt() :-
var st = new String("This is string");
console.log("st.charAt(0) is:" + st.charCodeAt(0));
console.log("st.charAt(1) is:" + st.charCodeAt(1));
console.log("st.charAt(2) is:" + st.charCodeAt(2));
console.log("st.charAt(3) is:" + st.charCodeAt(3));
console.log("st.charAt(4) is:" + st.charCodeAt(4));
console.log("st.charAt(5) is:" + st.charCodeAt(5));
console.log("");
// -------------------------------------------------------
// 3 - String concat() :- This method adds two or more strings and returns a new single string.
var str1 = new String("This is string one ");
var str2 = new String("This is string two");
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : " + str3);
console.log("");
// -------------------------------------------------------
// 4 - String indexOf() :- index of specified word in the string
var str11 = new String("This is string one");
var index = str11.indexOf("string");
console.log("indexOf found String :" + index);
var indexx = str1.indexOf("one");
console.log("indexOf found One :" + indexx);
console.log("");
// -------------------------------------------------------
// 5 - String lastIndexOf() :- Index of specified word which is the last word in the string
var str111 = new String("This is string one and again string one");
var indexxx = str1.lastIndexOf("string");
console.log("lastIndexOf found String :" + indexxx);
indexxx = str111.lastIndexOf("one");
console.log("lastIndexOf found String :" + indexxx);
console.log("");
// -------------------------------------------------------
// 6 - String localeCompare() :- This method returns a number indicating whether a reference string comes before or after or is the same as the given string in sorted order.
var str1111 = new String("This is beautiful string");
var inde = str1.localeCompare("This is beautiful string");
console.log("localeCompare first :" + index);
console.log("");
// -------------------------------------------------------
// 7 - String match() :- It returns an array of strings.
var paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
var regex = /[A-Z]/g;
var found = paragraph.match(regex);
console.log(found);
// Expected output: Array ["T", "I"]
// -------------------------------------------------------
// 8 - String replace() :-
// let re = /apples/gi;
var strng = "Apples are round, and apples are juicy.";
var newstr = strng.replace(/apples/gi, "oranges");
console.log(newstr);
console.log("");
// -------------------------------------------------------
// 9 - String search() :- This method executes the search for a match between a regular expression and this String object.
var re = /apples/gi;
var strn = "Apples are round, and apples are juicy.";
if (strn.search(re) == -1) {
    console.log("Does not contain Apples");
}
else {
    console.log("Contains Apples");
}
console.log("");
// -------------------------------------------------------
// 10 - String slice() :- This method extracts a section of a string and returns a new string.
var strg = "Apples are round, and apples are juicy.";
var sliced = strg.slice(3, -2);
console.log("sliced :- ", sliced);
console.log("");
// -------------------------------------------------------
// 11 - String substr() :- This method returns the characters in a string beginning at the specified location through the specified number of characters.
var strrn = "Apples are round, and apples are juicy.";
console.log("substr(1,2):- " + strrn.substr(1, 2));
console.log("substr(-2,2):- " + strrn.substr(-2, 2));
console.log("substr(1):- " + strrn.substr(1));
console.log("substr(-20, 2):- " + strrn.substr(-20, 2));
console.log("substr(20, 2):- " + strrn.substr(20, 2));
console.log("");
// -------------------------------------------------------
// 12 - String substring() :- This method returns a subset of a String object.
var strnn = "Apples are round, and apples are juicy.";
console.log("substring(1,2):- " + strnn.substring(1, 2));
console.log("substring(0,10):- " + strnn.substring(0, 10));
console.log("substring(5):- " + strnn.substring(5));
console.log("");
// -------------------------------------------------------
// 13 - String split() :- This method splits a String object into an array of strings by separating the string into substrings.
var strngg = "Apples are round, and apples are juicy.";
var splitted = strngg.split(" ", 3);
console.log("splitted :- ", splitted);
console.log("");
// -------------------------------------------------------
// 14 - String toLowerCase() :- This method returns the calling string value converted to lowercase.
var sttr = "Apples are round, and Apples are Juicy.";
console.log("toLowerCase :- ", sttr.toLowerCase());
console.log("");
// -------------------------------------------------------
// 15 - String toUpperCase() :- This method returns the calling string value converted to uppercase.
var stttr = "Apples are round, and Apples are Juicy.";
console.log("toUpperCase :- ", stttr.toUpperCase());
console.log("");
// -------------------------------------------------------
// 16 - String toLocaleLowerCase() :- This method is used to convert the characters within a string to lowercase while respecting the current locale. For most languages, it returns the same output as toLowerCase.
var sstr = "Apples are round, and Apples are Juicy.";
console.log("toLocaleLowerCase :- ", sstr.toLocaleLowerCase());
console.log("");
// -------------------------------------------------------
// 17 - String toLocaleUpperCase() :- This method is used to convert the characters within a string to uppercase while respecting the current locale. For most languages, it returns the same output as toUpperCase.
var ssttr = "Apples are round, and Apples are Juicy.";
console.log("toLocaleUpperCase :- ", ssttr.toLocaleUpperCase());
console.log("");
// -------------------------------------------------------
// 18 - String toString() :- This method returns a string representing the specified object.
var strry = "Apples are round, and Apples are Juicy.";
console.log("toString :- ", strry.toString());
console.log("");
// -------------------------------------------------------
// 19 - String valueOf() :- This method returns the primitive value of a String object.
var strrgg = new String("Hello world");
console.log("valueOf :- ", strrgg.valueOf());
console.log("");
// -------------------------------------------------------
