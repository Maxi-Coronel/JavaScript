//ejercicio

// Objetos

//const
const iva = x => x * .21;
const multiplicar = (a,b) => a * b;
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const precioKm = 65;

// let
let pedido;
let precioSillon;
let metroTela;
let grupoTela;
let precioTela;
let envio;
let distancia;
let precioEnvio;

function ingresoPedido() {
    for (pedido = prompt(`que modulacion de sillon quiere? 1cp, 2cp o rinconero`); pedido != `1cp` && pedido != `2cp` && pedido != `rinconero`; ) {
        pedido = prompt(`su dato fue incorrecto, que modulacion quiere? 1cp, 2cp o rinconero`); 
    }
    if (pedido == `1cp`) {
        precioSillon = 20000;
        metroTela = 5;
    }else if (pedido == `2cp`) {
        precioSillon = 30000;
        metroTela = 7;
    }else{
        precioSillon = 50000;
        metroTela = 11;
    }
}

function eleccionTela() {
    for (grupoTela = prompt(`que calidad de tela quiere? 1, 2 o 3`); grupoTela != `1` && grupoTela != `2` && grupoTela != `3`; ) {
        grupoTela = prompt(`su dato fue incorrecto, que calidad de tela quiere? 1, 2 o 3`); 
    }
    if (grupoTela == `1`) {
        precioTela = 1000;
    }else if (grupoTela == `2`) {
        precioTela = 800;
    }else{
        precioTela = 500;
    }
}

function eleccionEnvio() {
    for (envio = prompt(`elija retiro o envio`); envio != `retiro` && envio != `envio`; ) {
        envio = prompt(`su dato fue incorrecto, elija retiro o envio`);
    }
    if (envio == `retiro`) {
        precioEnvio = 0;
    }else {
        for (distancia = parseInt(prompt(`Ingrese la distancia del envio en Km`)); isNaN(distancia); ) {
            distancia = parseInt(prompt(`Sus datos deben ser solo numéricos para ingresar la distancia`));
        }
        precioEnvio = multiplicar(distancia,precioKm);
    }
}

ingresoPedido();
eleccionTela();
eleccionEnvio();

let precioTotal = suma(precioSillon,multiplicar(precioTela,metroTela));

console.log(`Su elección fue ${pedido}, con la calidad ${grupoTela} de tela`);
console.log(`El precio de su sillon es ${precioTotal} mas IVA`);

if (precioEnvio == 0) {
    console.log(`El precio de su factura es ${suma(precioTotal,iva(precioTotal))}`);
} else {
    console.log(`El precio de envio es ${precioEnvio}`);
    console.log(`El precio de su factura es ${suma(suma(precioTotal,iva(precioTotal)),precioEnvio)}`);
}