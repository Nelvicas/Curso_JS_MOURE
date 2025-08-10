//  objetos      Coleccion de propiedades 
                //  coleccion de datos relacionados tipo clave valor


// Sintaxis

let persona = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades

// Notacion punto

console.log(persona.name);


// Notacion de corchetes

console.log(persona["name"]);



// Modificacion de propiedades 
persona.name = " Brais Moure"
console.log(persona.name);

console.log(typeof persona.age);
persona.age = "37";
console.log(persona.age);
console.log(typeof persona.age);


// Eliminacion de propiedades

delete persona.age

console.log(persona)



//  Nueva propiedad

persona.email = "braismoure@mouredev.com";
persona["age"] = 37;


console.log(persona);


/// Metodos  ( Funciones )

let persona2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.");
    }
}

persona2.walk();


// Anidacion de objetos 

let persona3 = {
    name: "Brais",
    age: 37,
    alias:"MoureDev",
    walk: function () {
        console.log("La persona camina");
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log("La persona trabaja");
        }
    }
}

console.log(persona3);

console.log(persona3.name);
console.log(persona3.job);
console.log(persona3.job.name);
persona3.job.work();


//  Igualdad de objetos


let persona4 = {
    name: "Brais",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(persona);
console.log(persona4);


console.log(persona == persona4);
console.log(persona == persona4);

// Iteracion 

for (let key in persona4) {
    console.log(key + ": " + persona4[key]);
}


///   Funciones como objetos

function person(name, age) {
    this.name = name               // Deberia ser una clase
    this.age = age
}

let persona5 = new person("Brais", 37);
console.log(persona5)


console.log(typeof persona5);
console.log(typeof persona4);




/// Para poder acceder a una propiedad dentro 


let persona6 = {
    name: "Brais",
    age: 37,
    alias:"MoureDev",
    walk: function () {
        console.log("La persona camina");
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`);
        }
    }
}

console.log(persona6);
persona6.job.work();