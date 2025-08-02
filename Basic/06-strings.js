// Strings 

// Concatenacion

let myName = "Brais";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);


//Longitud

console.log(greeting.length);

// Acceso a caracteres

console.log(greeting[0]);
console.log(greeting[11]);


// Metodos comunes 

console.log(greeting.toLocaleUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Brais"));
console.log(greeting.indexOf("MoureDev"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("Brais"));
console.log(greeting.includes("MoureDev"));
console.log(greeting.slice(0, 10))

// Templates literals  (Plantillas)

let message = `Hola este
es mi 
curso 
de 
javascript`;

console.log(message);

// interpolacion de variables 

let email = "Brais@gmail.com"
console.log(`Hola ${myName}, tu email es ${email}`);
