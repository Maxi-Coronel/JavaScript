class sofa{
    constructor(nombre, modulacion, metroTela, alturaAs, alturaRe){
        this.nombre = nombre;
        this.modulacion = modulacion;
        this.metroTela = metroTela;
        this.alturaAs = alturaAs;
        this.alturaRe = alturaRe;
    };
    informe = function(){
        console.log(`el sillon ${this.nombre} es de ${this.modulacion}, con una altura de asiento de ${this.alturaAs} y respaldo ${this.alturaRe}`);
    };
};

const tulio = new sofa('1cp', 5, 0.43, 0.93);
const zaro = new sofa('3cp', 13, 0.45, 0.85);

zaro.informe();

const sillon = function (nombre, modulacion, metroTela, alturaAs, alturaRe) {
    this.nombre = nombre;
    this.modulacion = modulacion;
    this.metroTela = metroTela;
    this.alturaAs = alturaAs;
    this.alturaRe = alturaRe;
}

sillon.informe = function(){
    console.log(`el sillon ${nombre} es de ${renata.modulacion}, con una altura de asiento de ${renata.alturaAs} y respaldo ${renata.alturaRe}`);
}

const renata = new sillon(`renata`, `1cp`, 5, 0.45, 0.95);

renata.informe();

const notebook ={
    marca: 'asus',
    modelo: 'X556U',
    cpu: 'Intel Core i7',
    ram: '6GB',
    disco: 'SSD 480GB',
};
notebook.video = 'NVIDIA GEFORCE';

console.log(notebook);
console.log(`Notebook ${notebook.marca}`);
console.log(`placa de video ${notebook.video}`);