// An interface declaration is another way to name an object type:-

//assigning the string to the paramter is called "Inline Annotation"
let namets = (firstname: string, lastname: string) => {
    console.log(firstname, lastname);
}
namets("Renish", "Bhuva")
// ---------------------------------------------
interface NamePros {
    firstname: string,
    lastname: string,
    age: number,
    city: string
}

let nameFun = (namePros: NamePros) => {
    console.log(namePros.firstname, namePros.lastname, namePros.age, namePros.city);
}

nameFun({
    firstname: "Renish",
    lastname: "Bhuva",
    age: 21,
    city: "Ahmedabad"
})
// ---------------------------------------------