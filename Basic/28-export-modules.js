// Exportacion de modulos


/*
es un aforma de dividir nuestro codigo en piezas que podemos reutilizar 
*/

/*
Para poder hacer uso de  los modulos se debe de cambir ala extencion de 
los dos ficheros una donde se quiera exportar parte de codigo y la otra 
modificacion es donde se pretende utilizar ese modulo o fragmento de codigo como modulo 
*/


/*
 Otra forma es la creacion de un package ( un arcgivo con extension .json)
*/


 export function add(a, b){
    return a + b;
}

console.log(add(5, 10));



// propiedades 

export const PI = 3.1416;
export let name = "MoureDev";


// Clases

export class Circle{
    constructor(radius){
        this.radius = radius;
    }

    area(){
        return Math.PI * Math.pow(this.radius,2)
    }

    perimetor(){
        return 2 * Math.PI * this.radius;
    }
}



// Exportacion por defecto 

export default function substract(a, b){
    return a - b;
}



