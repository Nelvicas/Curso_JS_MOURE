
//  Clases 

class Person {

    constructor( name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

//Sintaxis

let person = new Person("Brais", 37, "Mouredev");
let person2 = new Person("Nelvi", 30, "Nel");


console.log(person);
console.log(person2);

console.log(typeof person);


// Valor por defecto 
class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new DefaultPerson ("Barais", 37)

console.log(person3);


// Acceso a propiedades

console.log(person3.alias);
console.log(["alias"]);

person3.alias = "Mouredev";

console.log(person3.alias);


// Funciones en clases 