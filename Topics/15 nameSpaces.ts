// ------------------------------NameSpaces------------------------------
// |- A namespace is a way to logically group related code.
// |- This is inbuilt into TypeScript unlike in JavaScript where variables declarations go into a global scope and if multiple JavaScript files are used within same project there will be possibility of overwriting or misconstruing the same variables, which will lead to the “global namespace pollution problem” in JavaScript.

// |- Namespaces are a TypeScript-specific way to organize code.
// |- Namespaces are simply named JavaScript objects in the global namespace. This makes namespaces a very simple construct to use.

// -------------------------------------------------------------
// Defining a Namespace :-------------------------------->
// |- A namespace definition begins with the keyword namespace followed by the namespace name as follows −
namespace SomeNameSpaceName {
  export interface ISomeInterfaceName {}
  export class SomeClassName {}
}
// |- The classes or interfaces which should be accessed outside the namespace should be marked with keyword export.
// |- To access the class or interface in another namespace, the syntax will be namespaceName.className −

// -------------------------------------------------------------

interface IStudent {
  fullName: string;
  rollNumber: number;
}

interface ITeacher {
  fullName: string;
  subject: Array<string>;
}

class Teacher {
  constructor(public fullName: string, public subject: Array<string>) {}
}

class Student {
  constructor(public fullName: string, public rollNumber: number) {}
}

let student1: IStudent = new Student("Renish Bhuva", 21);
console.log(student1.fullName, student1.rollNumber);

let teacher1: ITeacher = new Teacher("Emily Seibel", );
