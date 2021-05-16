//const
const iva = x => x * 1.21;
const multiplicar = (a,b) => a * b;
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

//array
const productos = [
    {
        id: 1,
        nombre: 'Fifa 20',
        precio: 500,
    },
    {
        id: 2,
        nombre: 'Mortal Kombat XL',
        precio: 800,
    },
    {
        id: 3,
        nombre: 'Mortal Kombat 11',
        precio: 700,
    },
    {
        id: 4,
        nombre: 'Need for speed',
        precio: 750,
    },
    {
        id: 5,
        nombre: 'PES 20',
        precio: 780,
    },
    {
        id: 6,
        nombre: 'Red Dead Redemption 2',
        precio: 630,
    }

];
let carrito = [];

// let
let pedido;
let precioJuego = 0;
let compra = 0;
let total = 0;
let totalPedido = 0;
let factura = 0;

//orden por precio

productos.sort(function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
  });
  for (const producto of productos) {
    console.log(`nombre: ${producto.nombre} precio: ${producto.precio}`);
};

//agregar al carrito
while (compra != `exit`) {
    compra = prompt(`marca el id del producto a comprar o coloca exit`);
    if (compra == `exit`) {
        compra = `exit`;
    } else {
        let agrega = productos.filter(productos => productos.id == compra);
        carrito.push(agrega[0]);
    };
}

console.log(carrito);

//suma del precio del carrito
for (let index = 0; index < carrito.length; index++) {
    total = total + carrito[index].precio;
}

//define formato para calcular valor
function ingresoPedido() {
    for (pedido = prompt(`que formato quiere? digital o físico`); pedido != `digital` && pedido != `físico`; ) {
        pedido = prompt(`su dato fue incorrecto, que formato quiere? digital o físico`); 
    }
}

if (pedido == `físico`) {
    totalPedido = total;
} else {
    totalPedido = multiplicar(total,0.6);
};

ingresoPedido();

factura = iva(totalPedido)

console.log(`el valor de los productos en su carrito es de ${total}`);
console.log(`Usted eligio el formato ${pedido}, el cual es un 40% más barato, el valor total de su compra es de ${totalPedido} más IVA`);
console.log(`El valor de su factura es de ${factura}`);