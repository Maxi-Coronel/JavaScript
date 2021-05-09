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