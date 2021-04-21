let edad = parseInt(prompt(`ingrese su edad`));
let saludo = prompt(`dime un saludo`);
let dinero = prompt(`dime cuanto dinero quieres gastar`);

if (edad < 18){
    alert(`no puedes ingresar, usted es menor`);
}else{
    console.log(`Usted puede navegar en nuestra web`);
};

if (saludo == `Hola`){
    alert(`Su saludo preferido es "Hola" muchas gracias por contestar`);
} else{
    console.log(`su saludo fue ` + saludo);
};

if (dinero < 200){
    alert(`con su dinero no puede comprar nada en nuestra tienda`);
}else if (dinero < 500){
    alert(`con su dinero puede comprar solo una bebida`);
}else if (dinero < 1000){
    console.log(`usted podrá comprar una bebida más un bocadito`);
}else{
    alert(`usted podrá comprar lo que quiera`);
};