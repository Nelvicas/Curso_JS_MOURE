
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

class PersonWithMethod{

    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk(){
        console.log("La persona camina");
    }
}

let person4 = new PersonWithMethod("Brais", 37, "Moiuredev");

//Sconsole.log(person4);
person4.walk();


// Propiedades privadas


class PrivatePerson{

    #bank     // asi se define una propiedad privada solo se puede acceder desde la clase 

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank 
    }

    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Brais", 37, "Mouredev", "IBA65453");


//   ya no podemos acceder
//   console.log(person5.#bank);  
// person5.bank = new  IBA65453   //  bank no es #bank

console.log(person5);



// Getters y Setters

class GetPerson{

    #name
    #age
    #alias

    constructor(name, age, alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name(){
        return this.#name
    }
    
}

let person6 = new GetPerson("Brais", 38, "Mourede");

console.log(person6);
console.log(person6.name);