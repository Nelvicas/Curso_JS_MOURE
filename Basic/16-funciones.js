// Funciones        Es un bloque de codigo diseñada para realizar una tarea en especifica las cuales se deben de invocar 


// simple

function myfunc(){
    console.log("!Hola Funcion!");
}

// llamada a la funcion

for(let i = 0; i < 5; i++){
    myfunc();
}

// Con parametros 


function myFuncWiithParams(name){
    console.log(`Hola, ${name}`);
}

myFuncWiithParams("Brais");
myFuncWiithParams("MoureDev");


// Funciones anonimas 

const myFunc2 = function(name){
    console.log(`Hola, ${name}`);
}

myFunc2("Brais MOures");


// Arrow Function


const myFunc3 = (name) => {
    console.log(`Hola, ${name}`);
}

myFunc3("Brais Moure3")


const suma = () => {
    return 7 + 1;
}

console.log(suma());


const myFunc4 = (name) => console.log(`¡Hola, ${name}`);

myFunc4("MoreDev");


// Parametros

function sum(a, b){
    console.log(a + b);
}

sum(5, 10);
sum(5);
sum();


// Por defecto 

function defaultSum(a = 0, b = 0){
    console.log(a + b);
}

defaultSum();
defaultSum(5);
defaultSum(6, 10);
defaultSum(b = 7);


// Retorno de valores 

function mult(a, b){
    return a * b;
}

console.log(mult(2, 2));


// Funciones anidadas


function extern(){
    console.log("Funncion externa");
    function interna(){
        console.log("Funcion interna");
    }
    interna();
}

extern();


// Funcion de orden superior


function applyFunc(func, param){
    func(param);
}

applyFunc(myFunc4, "Funcion de orde Superior");



///  forEach

myArray = [1, 2, 3, 4];

mySet = new Set(["Brais", "Moure", "moureDev", 37, true, "braismoure@mouredev.com"]);

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 38]

]);


myArray.forEach(function (value){
    console.log(value);
})

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));



