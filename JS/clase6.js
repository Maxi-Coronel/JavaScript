/* const numero = [1,2,3,4,5];
const booleano = [true,false];
const completo = [`maxi`,1992,true];

numero.push(6); // agrega un valor en la ultima posición
numero.unshift(0); // agrega un valor en la primer posición


for (let index = 0; index < 5; index++) {
    console.log(numero[index]);
};

console.log(numero.length);
console.log(numero.join("\n")); // convierte el array en un string y lo separa por el caracter que le indiquemos

const nuevoArray = numero.concat(booleano); // concatena 2 array

console.log(nuevoArray);

const numeros = numero.slice(0,2);//trae solo la posición 0 y hasta el 2 sin incluirlo

console.log(numeros); */


//ejercicio

/* const listaAlumnos = [];
let cantidad = 10;

do {
    let entrada = prompt(`Ingrese el nombre del alumno`);
    listaAlumnos.push(entrada);
} while (listaAlumnos.length < cantidad);

console.log(listaAlumnos.join(`\n`)); */


//no se termino :(

/* const objeto ={
    id: 1,
    producto: `arroz`
}

const arrayOb = [
    objeto,{
        id: 2,
        producto: `fideo`
    }
    objeto1,{

    }
]; */

//nuevo

class producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    };
    iva(){
        this.precio * 1.21;
    };
};

const productos = [];

productos.push( new producto(`1`,`arroz`,`10`));
productos.push( new producto(`2`,`fideo`,`12`));
productos.push( new producto(`3`,`hamburguesa`,`50`));
productos.push( new producto(`4`,`lenteja`,`5`));

console.log(productos.join(`\n`));