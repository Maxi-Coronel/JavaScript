//Clase 1

 let nombre = prompt(`Ingrese su nombre`);
let apellido = prompt(`Ingrese su apellido`);
let numero = parseInt(prompt(`Primer número para multiplicar`));
let numero2 = parseInt(prompt(`Segundo numero para multiplicar`));

console.log(`Hola ` + nombre + `. Como estas?`);
console.log(`Su nombre completo es ` + nombre + ` ` + apellido + `?`);
console.log(numero + `x` + numero2 + `=` + numero*numero2); 



//Clase 2

 let nombre = prompt(`Dime su nombre`);
let edad = parseInt(prompt(`Ingrese su edad`));
let saludo = prompt(`Dime un saludo`);
saludo = saludo.toLowerCase();
let dinero = parseInt(prompt(`Dime cuanto dinero quieres gastar`));


if (saludo == `hola`){
    console.log(saludo + ` ` + nombre + ` es un gusto conocerte.`);
} else{
    console.log(saludo + ` ` + nombre);
};

if (edad < 18){
    console.log(`no puedes ingresar, usted es menor`);
}else{
    console.log(nombre + `, usted puede navegar en nuestra web`);
};

if (dinero < 200){
    console.log(`con su dinero no puede comprar nada en nuestra tienda`);
}else if (dinero < 500){
    console.log(`con su dinero puede comprar solo una bebida`);
}else if (dinero < 1000){
    console.log(`usted podrá comprar una bebida más un bocadito`);
}else{
    console.log(`usted podrá comprar lo que quiera`);
}; 



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