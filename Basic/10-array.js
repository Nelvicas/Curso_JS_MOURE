// array

// Declaracion

let myArray = [];
let myArray2 = new Array();


console.log(myArray);
console.log(myArray2);


myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

// Inicializacion 


myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, 45, true);

console.log(myArray);
console.log(myArray2);


myArray2 = new Array(3);
myArray2[0] = "Brais";
//myArray2[1] = "Moure";
myArray2[2] = "mouredev";

console.log(myArray2)

myArray = [];
myArray[2] = "Brais";
//myArray[0] = "Moure";
myArray[1] = "mouredev";

console.log(myArray);


// Metodos comunes 

myArray = [];

// push y pop

myArray.push("Brais");   // ingresa valores alos indices 
myArray.push("Moure");
myArray.push("mouredev")
myArray.push(37);

console.log(myArray);


console.log(myArray.pop());   // elimino el ultimo valor y devuelve el nuevo array
myArray.pop();

console.log(myArray);


// shift y unshift

console.log (myArray.shift());     // elimina el primer valor del array
console.log(myArray);

myArray.unshift("Brais", "mouredev");     // ingresa los valores definidos al inicio
console.log(myArray);


// length

console.log(myArray.length);


// clear

myArray = [];
myArray.length = 0;      // alternativa 
console.log(myArray);


// slice 

myArray = ["Brais", "Moure", "mouredev", 37, true]
let myNewArray = myArray.slice(1, 3);

console.log(myArray);
console.log(myNewArray);


// splice


myArray.splice(1, 3);
console.log(myArray);

myArray = ["Braiss", "Mouree", "mouredevv", 37, true];

myArray.splice(1, 2, "Nueva entrada");
console.log(myArray)