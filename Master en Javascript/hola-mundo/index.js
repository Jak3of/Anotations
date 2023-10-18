// ejemplo 2 - modo estricto

"use strict";

// ejemplo 1 - variables

let nombre="nelson";
var pais="Peru";
var continente="America";
var antiguedad=2023;
var pais_y_continente=pais+" "+continente;

console.log(nombre, pais, continente, antiguedad);
console.log(pais_y_continente);


// Definicion de Let
// let es una nueva variable de JavaScript que se puede reasignar o redeclarar en cualquier momento.

if (true) {
    nombre="nelson2";
    console.log(nombre);
}

console.log(nombre);


if (true) {
    let pais="Brasil";
    // si se define de nuevo con let, solo se asigna el valor dentro del bloque
    console.log(pais);
}

// fuera del bloque toma el valor de la variable var 
console.log(pais);


// constantes
const pi=3.14;
var radio=2;

var area=pi*radio*radio;

console.log(area);

// pi = 3;
// console.log(pi);
// index.js:46  Uncaught TypeError: Assignment to constant variable. at index.js:46:4

// Operadores

var x=10;
var y=5;

var suma=x+y;

console.log(suma);



var cadena="hola";

console.log(cadena+suma);

console.log(suma+x+cadena);

console.log(cadena+x+suma);


// tipos de datos

var apellido="Rodriguez";
var edad=30;
var casado=false;

var numero="44";

console.log(numero+2);
console.log(Number(numero)+2);
console.log(parseInt(numero)+2);

// type of 

console.log(typeof (apellido));
console.log(typeof (edad));
console.log(typeof (casado));


if (typeof (edad)==="number") {
    console.log("es un numero");
} else {
    console.log("no es un numero");
}
// and

if (edad===30&&casado===false) {
    console.log("tiene 30 pero no es casado");
} else {
    console.log("no tiene 30 pero si es casado");

}

// or

if (edad===30||casado===false) {
    console.log("o tiene 30 años o no es casado");

} else {
    console.log("no tiene 30 años y es casado");

}


// switch

switch (edad) {
    case 18:
        console.log("tiene 18 anios");
        break;

    case 30:
        console.log("tiene 30 anios");
        break;
    default:
        console.log("no tiene 18 anios");
        break;
}


// bucles 

for (var i=0; i<4; i++) {
    console.log(i);
}

// while

while (edad<34) {
    console.log("edad w: "+edad);
    edad++;
}

// do while


do {
    edad=38;
    console.log("edad dw: "+edad);
    edad++;
} while (edad<38);

// alertas y confirmaciones

// alert("hola");

// var confirmacion=confirm("hola");
// console.log( confirmacion ? "si acepto" : "no acepto");

// var respuesta=prompt("pon tu edad:");

// console.log(Number(respuesta));


// ejercicios 

// variables 

// Programa que pida dos numeros que nos diga cual es el mayor el menor y si son iguales.

// var numero1 =parseInt(prompt("ingresa el primer numero",0));
// var numero2 =parseInt(prompt("ingresa el segundo numero",0));

// while ( isNaN(numero1) || numero1 == 0) {
//     numero1 =parseInt(prompt("ingresa el primer numero",0));

// }
// while ( isNaN(numero2) || numero2 == 0) {
//     numero2 =parseInt(prompt("ingresa el segundo numero",0));
// }


// // en condiciones calcula en tipo number directamente 
// if (numero1>numero2) {
//     console.log("el mayor es: "+numero1
//     +" y el menor es: "+numero2);
// }else if (numero2==numero1) {
//     console.log("los numeros son iguales");
// } else {
//     console.log("el mayor es: "+numero2
//     +" y el menor es: "+numero1);
// }

// Utiliza un bucle , mostrar la suma y la media de los numero introducidos hasta introducir
// un numero negativo y ahi mostrar el resultado

// suma=0;
// var contador=0;

// do {
//     var numero=parseInt(prompt("ingresa un numero", 0));

//     // par que no me reste el ultimo numero negativo
//     if (numero>=0) {
//         suma+=numero;
//         contador++;
//     } else if (numero<0) {
//         break;
//     }
//     console.log(suma);
//     console.log(contador);

// } while (numero>=0);

// alert("la suma es: "+suma);
// alert("la media es: "+suma/contador);


// hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario

// var numero1 =parseInt(prompt("ingresa el primer numero",0));
// var numero2 =parseInt(prompt("ingresa el segundo numero",0));

// document.write("<h1>numeros entre "+numero1+" y "+numero2+" son: </h1>");

// for ( i=numero1; i<=numero2; i++) {
//     document.write(i+"</br>");
// }


// mostrar todos los numeros pares entre dos numero introducidos por el usuario


// var numero1 =parseInt(prompt("ingresa el primer numero",0));
// var numero2 =parseInt(prompt("ingresa el segundo numero",0));
// document.write("<h1>numeros pares entre "+numero1+" y "+numero2+" son: </h1>");

// for ( i=numero1; i<=numero2; i++) {
//     if (i%2==0) {
//         document.write(i+"</br>");
//     }
    
// }

// muestre todos los numeros divisores de un numero introducido por el usuario

// var numero1 =parseInt(prompt("ingresa el numero",0));

// for ( i=1; i<=numero1; i++) {
//     if (numero1%i==0) {
//         document.write(i+"</br>");
//     }
// }

// que nos diga si un numero es par o impar 1 ventana de prompt 2 si no es valido que nos pida de nuevo el numero

// var numero1 =parseInt(prompt("ingresa el numero",0));
// while ( isNaN(numero1)) {
//     numero1 =parseInt(prompt("ingresa el numero",0));

// }

// if (numero1%2==0) {
//     console.log("el numero es par");
// } else {
//     console.log("el numero es impar");
// }

// tabla de multiplicar de un numero introducido por el usuario

// var numero1 =parseInt(prompt("ingresa el numero",0));

// document.write("<h1>la tabla de multiplicar de "+numero1+" es: </h1>");

// for ( i=1; i<=12; i++) {
//     document.write(numero1+" x "+i+" = "+numero1*i+"</br>");
// }