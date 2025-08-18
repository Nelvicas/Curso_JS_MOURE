// Importacion de modulos 


/*
Para poder hacer uso de  los modulos se debe de cambir ala extencion de 
los dos ficheros una donde se quiera exportar parte de codigo y la otra 
modificacion es donde se pretende utilizar ese modulo o fragmento de codigo como modulo 
*/

import { add, PI, name, Circle} from "./28-export-modules.js";

import substract from "./28-export-modules.js";

// Funciones 

console.log(add(5, 11));


// Propiedades

console.log(PI);
console.log(name);

// Clases

let circle = new Circle(100)
console.log(circle.radius);
console.log(circle.area().toFixed(2));
console.log(circle.perimetor().toFixed(2));



// Exportacion por defecto 

console.log(substract(5, 9));

// let myClass = new defaultImport()
// myClass.funct()


// Proyecto modular


// import {myImport } from "./directory/file.js"



// Modulos externos 
// 
// 
// const os = require("os");
// console.log(os.platform());