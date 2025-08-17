// Manejo de errores 


// excepciones 

// Produce una excepcion
let myObject;
// console.log(myObjet.email);



// Tratamiento de eroores

// try-catch



try{
    // Codigo que intenta ejecutar
    console.log(myObject)
    console.log("Finaliza la ejecucion sin errores");    
}catch{
    //Bloque de errores
    console.log("Se ha producido un error")
}


// Captura de error

try{
    console.log(myObject.email)
}catch (error){
    console.log("Se ha producido un error: ", error.message)
}



// finally

try{
    console.log(myObject.email);
}catch (error){
    console.log("Se aproducido un error; ", error.message);
} finally{
    console.log("Este codigo se ejecuta siempre")
}


// try{
    // console.log(myObject.email);
// } finally{
    // console.log("Este codigo se ejecuta siempre")
// }



// Lanzamiento de errores 


// throw

//throw new Error("Se ha producido un error")

function sumInteger(a, b){
    // if(typeof a === "number"){
        // console.log("Es instancia de numero");
    // }
    // if (Number.isNaN(a)){
        // console.log("No es un numero");
    // }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros enteros");
    }
    if (a == 0 || b == 0){
        throw new SumZeroIntegerError("Se esta intentando sumer cero ", a, b)
    }

    return a + b;
}

try{
    console.log(sumInteger("5", 10));
    console.log(sumInteger(5, 10));
    console.log(sumInteger(5, "10"));
    console.log(sumInteger("5", "10"));
} catch (error){
    console.log("Se ha producido un error: ", error.message);
}


// Capturar diferentes tipos de errores

try{
    // console.log (sumInteger(5.5, 10));
    console.log("5", 10)
} catch(error){
    if(error instanceof TypeError){
        console.log("se ha producido un error de tipo: ", error.message);
    }else if ( error instanceof Error){
        console.log("Se ha producido un error: ", error.message);
    }
}


// Crear excepciones personalizadas 

class SumZeroIntegerError extends Error{
    constructor( message, a, b){
        super(message);
        this.a = a;
        this.b = b;
    }

    printNumber(){
        console.log(this.a, " + ", this.b)
    }
}

try{
    console.log(sumInteger(0, 10))
}catch(error){
    console.log("Se ha producido un error personalizado: ", error.message);
    error.printNumber();
}