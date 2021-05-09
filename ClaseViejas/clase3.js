//Clase 3

let repeticion =parseInt(prompt(`ingrese un número`));

for(let i = 1; i <= repeticion; i++){
    console.log(i + ` repetición`);
};

for( let i=1 ; i <= 30 ; i = i + 2 ){
    console.log(i);
}

let numero = parseInt(prompt(`Ingrese otro número`));

for(let i = 1; i <= 10; i++){
    console.log(numero + ` x ` + i + ` = ` + numero*i);
};


let nombre = prompt(`Ingrese un nombre`);

while (nombre != `ESC`){
    console.log(`hola ` + nombre);
    nombre = prompt(`Ingrese otro nombre`);
  };

  let dato = parseInt(prompt(`Ingrese un número`));

  for(let i = 1; i <= dato; i++){
      console.log(`Hola ` + i);
  }; 


//clase 4

  function saludar(){
      let nombre = prompt(`ingresar nombre`);
      alert(`Tu nombre es ` + nombre);
  }

  saludar();
  saludar();
  saludar();

let resultado = 0;

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(parseInt(prompt(`ingrese numero`)), parseInt(prompt(`otro numero`)));
mostrar(resultado);



function sumarlo(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumarlo(parseInt(prompt(`Primer numero`)), parseInt(prompt(`Segundo numero`)));
console.log(resultado);


function calculadora(primerNumero, operacion, segundoNumero){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(parseInt(prompt(`ingrese un número`)), prompt(`ingrese una operación`), parseInt(prompt(`ingrese otro número`))));

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * .21;

let precio = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precio, iva(precio)),descuento);

console.log(nuevoPrecio);