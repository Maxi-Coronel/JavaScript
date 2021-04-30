/*   function saludar(){
      let nombre = prompt(`ingresar nombre`);
      alert(`Tu nombre es ` + nombre);
  }

  saludar();
  saludar();
  saludar(); */

/* let resultado = 0;

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(parseInt(prompt(`ingrese numero`)), parseInt(prompt(`otro numero`)));
mostrar(resultado);

 */

/* function sumarlo(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumarlo(parseInt(prompt(`Primer numero`)), parseInt(prompt(`Segundo numero`)));
console.log(resultado);
 */

/* function calculadora(primerNumero, operacion, segundoNumero){
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
console.log(calculadora(parseInt(prompt(`ingrese un número`)), prompt(`ingrese una operación`), parseInt(prompt(`ingrese otro número`)))); */

/* const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * .21;

let precio = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precio, iva(precio)),descuento);

console.log(nuevoPrecio); */

//const
const iva = x => x * .21;
const multiplicar = (a,b) => a * b;
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

//let

let modulacion = prompt(`elija que sillon quiere 1cp, 3cp o rinconero`);

if (modulacion != '1cp' && modulacion != '3cp' && modulacion != 'rinconero') {
    alert(`el valor ingresado no es correcto`);
    modulacion = prompt(`vuelva a elegir 1cp, 3cp o rinconero`);
}else {
    modulacion = modulacion;
}

let metroTela;
let precioSillon;
let grupoTela = prompt(`elija el grupo de grupoTela 1, 2 o 3`);
let precioTela;
let sillonNeto = suma(precioSillon,multiplicar(precioTela,metroTela));
let sillonIva = suma(sillonNeto,iva(sillonNeto));
let zona = prompt(`dime si la zona es capital, interior o sur`);
let precioFlete;
let fleteIva = suma(precioFlete, iva(precioFlete));

function sillon() {
    
        if(modulacion == `1cp`){
        metroTela = 2;
        precioSillon = 20000;
        }else
            if(modulacion == `3cp`){
                metroTela = 5;
                precioSillon = 35000;
            }else{
                    metroTela = 7;
                    precioSillon = 50000;
            }
    /* if (modulacion == `1cp`){
        metroTela = 2;
        precioSillon = 20000;
    }else
        if(modulacion == `3cp`){
            metroTela = 5;
            precioSillon = 35000;
        }else
            if (modulacion == `rinconero`) {
                metroTela = 7;
                precioSillon = 50000;
            }else {
                alert(`el valor ingresado no es correcto`);
                modulacion = prompt(`vuelva a elegir 1cp, 3cp o rinconero`);
            } */
    
    console.log(`Usted eligio el sillon ` + modulacion);
    console.log(`los metros de tela necesario son ` + metroTela + ` mts`);
    console.log('el precio del sillon es ' + precioSillon)  
}


function tela() {
    if (grupoTela == 1) {
        precioTela = 1500;
    } else
        if (grupoTela == 2) {
            precioTela = 1800;
        }else
            if (grupoTela == 3) {
                precioTela = 3000;
            }else {
                alert(`el valor ingresado no es correcto`);
                grupoTela = prompt(`vuelva a elegir 1, 2 o 3`);
            }
    
    console.log(`la calidad de tela elegida es de grupo ` + grupoTela + ` y el valor por metro es ` + precioTela);
    console.log(`el valor neto de su sillon es de ` + sillonNeto);
    console.log(`el valor del sillon mas IVA es ` + sillonIva);
}

function flete() {
    if(zona == `capital`){
        precioFlete = 2000;
    }else
        if(zona == `sur`){
            precioFlete = 5000;
        }else
            if(zona == `interior`){
                precioFlete = 4000;
            }else{
                alert(`el valor ingresado no es correcto`);
                modulacion = prompt(`vuelva a elegir capital, interior o sur`);
            }
    
    console.log(`La zona seleccionada es ` + zona);
    console.log(`El precio del flete para esa zona es ` + precioFlete + ` + IVA`);
    console.log(`Su costo total de flete es ` + fleteIva);
}

function pedidoLiving() {
    sillon();
    tela();
    flete();
}

pedidoLiving();