// Console 

// log 

console.log("!Hola, JavaScript!");

// error

console.error("Este es un mensaje de error");
console.error("Error al conectar a la base de datos: ", new Error("Conexion fallida."));

// warn 

console.warn("Este es un mensaje de advertencia");

// info

console.info("Este es un mensaje de informacion");

// tabla
let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data);


data = [
    {name: "Brais", age: 37},
    {name: "SAra", age: 21}
]

console.table(data);

// group

console.group("Usuario: ")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd();


// time

console.time("Tiempo de ejecucion 2");
    for (let i = 0; i < 1000; i++){

    }

    console.time("Tiempo de ejecucion 1");
    for ( let i = 0; i < 1000; i++){

    }

    console.timeEnd("Tiempo de ejecucion 1");
    for ( let i = 0; i < 1000; i++){
    }

console.timeEnd("Tiempo de ejecucion 2");


// assert

let age = 17;
console.assert(age >= 18,"El usuario debe ser mayor de edad.");


// count

console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");


//trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecucion.")
}

funcA();

// clear


// console.clear()