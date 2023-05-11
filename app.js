function mayor(edad){
if(edad >= 18){
    console.log("puedes ingresar");
    let dinero = prompt("cuantos dolares queres");
    dinero=parseFloat(dinero);
    let dolar=500;
    cambio = dinero * dolar;
    console.log("necesitas"+ cambio + "pesos");
}
else{
    console.log("alto ahi pequeño");
}
}

let eda = prompt("ingresa tu edad ");
mayor(eda);
