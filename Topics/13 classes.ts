class Youtube {
  constructor() {}

  firstname: string;
  lastname: string;
  age: number;

  gerFirstname() {
    console.log("My FirstName is " + this.firstname);
  }

  getLastname() {
    console.log("My LastName is " + this.lastname);
  }

  getFullName() {
    console.log(
      "My Full Name is " + this.firstname + " " + this.lastname + "."
    );
  }

  getAge() {
    console.log("My Age is " + this.age);
  }
}

let ytobj = new Youtube();

ytobj.firstname = "Renish";
ytobj.gerFirstname();

ytobj.lastname = "Bhuva";
ytobj.getLastname();

ytobj.getFullName();

ytobj.age = 21;
ytobj.getAge();
