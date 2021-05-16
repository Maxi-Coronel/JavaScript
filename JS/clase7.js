let carrito = [];

let storageValues = localStorage.variableCarrito;
console.log(storageValues);

if(storageValues === null){
    alert(`nada`);
    carrito = [];
} else{
    carrito = [storageValues];
    console.log(carrito);
}

//clase constructora
class producto{
    constructor(nameProduct, value){
        this.nameProduct = nameProduct;
        this.value = value;
    }
}

//creamos el objeto producto
const productoUno = new producto(`detergente`, 100);
console.log(productoUno);

//funcion agregamos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem(`variableCarrito`, carrito);
    console.log(carrito);
};

agregarAlCarrito(productoUno);