
// Operadores aritmeticos 

let a = 5;
let b = 10;


console.log(a + b);  // suma
console.log(a - b);  //resta
console.log(a * b);  //multiplicacion
console.log(a / b);  //divicion
console.log(a % b);  //modulo (residuo)
console.log(a ** b); //exponencial

a++   // incremento
console.log(a);

b--   //decremento
console.log(b);



//   OPERADORES DE ASIGNACION

let myVariable = 2;

console.log(myVariable);
myVariable += 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;


//   OPERADORES DE COMPARACION

console.log(a > b);       // mayor que
console.log(a < b);       // menor que 
console.log(a >= b);      // mayor o igual que 
console.log(a <= b);      // menor o igual que 
console.log(a == b);      //  igualdad
console.log(a == 6);      // igualdad por valor
console.log(a == "6");    //  igualdad por valor 
console.log(a == a);
console.log(a === a);     // igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6");
console.log(a != 6);      // desigualdad (diferente)
console.log(a !== 6);
console.log(0 == false);





//    OPERADORES LOGICOS 

// and (&&)

console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);


// or (||)

console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 30 > 40);


// not (!)


console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));


// OPERADORES TERNARIOS 


const isRaining = false;

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo");