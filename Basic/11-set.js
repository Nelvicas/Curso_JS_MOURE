/// set 

// Declaracion 

let mySet = new Set();

console.log(mySet);

//Inicializacion

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismourede@"])

console.log(mySet);

// Metodos comunes 

// add y delete 

mySet.add("htrps://moure.dev");

console.log(mySet);

mySet.delete("htrps://moure.dev");
console.log(mySet);

console.log(mySet.delete("Brais"));
console.log(mySet.delete(4));


// has      debuelve un booleano verdadero o falso dependiendo de que el valor de  la variable se encuentra en set o no

console.log(mySet.has("Moure"));
console.log(mySet.has("Brais"));

// size    devuelve el tamaño del set


console.log(mySet.size);


//  convertir un set a un array


let myArray = Array.from(mySet);
console.log(myArray);


// convertir un array a set

mySet = new Set(myArray);
console.log(mySet);

/// No admite duplicados

mySet.add("htrps://moure.dev");
mySet.add("htrps://moure.dev");
mySet.add("htrps://moure.dev");

console.log(mySet)







