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

/* for(let rep = 1; rep <= 10; rep++){
    console.log(rep);
};

let numero = parseInt(prompt(`Ingrese un número`));

for(let i = 1; i <= 10; i++){
    console.log(numero + `x` + i + `=` + numero*i);
};

let repetir = false;

do{
console.log("¡Solo una vez!");
}while(repetir);


for(let i = 0; i <= 10; i++){
    console.log(i);
}; */