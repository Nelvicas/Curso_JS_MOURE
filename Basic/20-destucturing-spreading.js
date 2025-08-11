

myArray = [1, 2, 3, 4];


let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}


// Destructuracion    Capacidad de extraer valores y asignarlos a variables  


//Sintaxis array 

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;

console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);


// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0 ] = myArray;

console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

let [myValue10, , , myValue13] = myArray;

console.log(myValue10);
console.log(myValue13);


// Sintaxis objecs


let { name, age, alias } = person
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis objetcts con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person;
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)


// Sintaxis objects con nuevos nombres de variables 

let {name: name3, age: age3, alias:alias3 } = person

console.log(name3);
console.log(age3);
console.log(alias3);


// objetos anidados


let persona3 = {
    name: "Brais",
    age: 37,
    alias:"MoureDev",
    walk: function () {
        console.log("La persona camina");
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log("La persona trabaja");
        }
    }
}


let { name: name4, job: {name: jobName } } = persona3

console.log(name4);
console.log(jobName);


//  Propagacion  (...)

// Sintaxis arrays


let myArray2 = [...myArray,5 ,6]   // Copia
console.log(myArray2)


// Copia de array

let myArray3 = [...myArray]
console.log(myArray3)

// Combinacion de array 

let myArray4 = [...myArray, ...myArray2, myArray3]

console.log(myArray4)


// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev" }
console.log(person4);

// Copia de objetos

let persona5 = { ...person }

console.log(persona5)