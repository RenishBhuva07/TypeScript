// ------------------------------NameSpaces------------------------------
// |- A namespace is a way to logically group related code.
// |- This is inbuilt into TypeScript unlike in JavaScript where variables declarations go into a global scope and if multiple JavaScript files are used within same project there will be possibility of overwriting or misconstruing the same variables, which will lead to the “global namespace pollution problem” in JavaScript.
// |- Namespaces are a TypeScript-specific way to organize code.
// |- Namespaces are simply named JavaScript objects in the global namespace. This makes namespaces a very simple construct to use.
// -------------------------------------------------------------
// Defining a Namespace :-------------------------------->
// |- A namespace definition begins with the keyword namespace followed by the namespace name as follows −
var SomeNameSpaceName;
(function (SomeNameSpaceName) {
    var SomeClassName = /** @class */ (function () {
        function SomeClassName() {
        }
        return SomeClassName;
    }());
    SomeNameSpaceName.SomeClassName = SomeClassName;
})(SomeNameSpaceName || (SomeNameSpaceName = {}));
var Teacher = /** @class */ (function () {
    function Teacher(fullName, subject) {
        this.fullName = fullName;
        this.subject = subject;
    }
    return Teacher;
}());
var Student = /** @class */ (function () {
    function Student(fullName, rollNumber) {
        this.fullName = fullName;
        this.rollNumber = rollNumber;
    }
    return Student;
}());
var student1 = new Student("Renish Bhuva", 21);
console.log(student1.fullName, student1.rollNumber);
var teacher1 = new Teacher("Emily Seibel");
