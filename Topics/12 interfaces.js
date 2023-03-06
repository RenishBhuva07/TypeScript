// An interface declaration is another way to name an object type:-
//assigning the string to the paramter is called "Inline Annotation"
var namets = function (firstname, lastname) {
    console.log(firstname, lastname);
};
namets("Renish", "Bhuva");
var nameFun = function (namePros) {
    console.log(namePros.firstname, namePros.lastname, namePros.age, namePros.city);
};
nameFun({
    firstname: "Renish",
    lastname: "Bhuva",
    age: 21,
    city: "Ahmedabad"
});
// ---------------------------------------------
