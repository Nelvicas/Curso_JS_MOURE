// map

/*
Estructuras  
nos sirven para almacenar un conjunto de datos 

Map 
esta formado por una clave y un valor 

*/

// Declaracion 

let myMap = new Map();
console.log(myMap);

//Inicializacion

myMap = new Map([
    ["name", "Brais"],
    ["email","braismoure@mouredev.com"],
    ["age", 37]
]);

console.log(myMap);

// METODOS

// set       actualizar elemento o agregarlo

myMap.set("alias","mouredev");
myMap.set("name", "Brais Moure");

console.log(myMap);

// get     sirve para recuperar el valor 

console.log(myMap.get("name"));
console.log(myMap.get("surname"));


//  has    sirve para conprobar si un clave existe

console.log(myMap.has("surname"));
console.log(myMap.has("age"));


// delete

myMap.delete("email");

console.log(myMap);

// keys, values y entries

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// size

console.log(myMap.size)     // muestra el tamaño del map 



// clear     limpiar 


myMap.clear();
console.log(myMap);




