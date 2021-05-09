// objeto
const notebook ={
    marca: 'asus',
    disco: 'HDD 1TB',
    ram: '6GB DDR4',
};

//agregar propiedad a objeto
notebook.video = 'NVIDIA GEFORCE 940MX';

console.log(notebook.video);

// function constructora
const persona = function(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function() {
        console.log (`hey!!! ${this.nombre}`);
    }
};

const maxi = new persona('maximiliano', 'coronel', 28);
const rocio = new persona('rocio','viotto',29);

console.log(maxi.nombre);

// function dentro del objeto


maxi.saludar();

//clases

class auto{
    constructor(marca, modelo, año, cilindrada, accesorios){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cilindrada = cilindrada;
        this.accesorios = accesorios;
    };
    velocidad(){
        console.log(`la marca del auto es ${this.marca}, el modelo es ${this.modelo}`);
    };
};

const auto1 = new auto(prompt(`dime la marca de tu auto`),
                        prompt(`dime el modelo de tu auto`),
                        prompt(`dime año de tu auto`),
                        prompt(`dime la cilindrada de tu auto`),
                        prompt(`dime los accesorios de tu auto`));
const golcito = new auto('VW','gol',2005,1600,'direccion, AACC');

auto1.velocidad();
golcito.velocidad();

//entrega 5

var MyClass = (function() {
  var nextId = 1;

   return function MyClass(name) {
      this.name = name;
      this.id = nextId++;
   }
})();

var obj1 = new MyClass('joe'); //{name: "joe", id: 1}
var obj2 = new MyClass('doe'); //{name: "doe", id: 2}
