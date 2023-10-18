'use strict';
// funciones 

// es una agrupacion reutilizable de instrucciones que se pueden ejecutar varias veces 
// que retornan un valor 

// metodo 
// es una agrupacion de instrucciones que se pueden ejecutar varias veces
// no retornan un valor

// ejemplo de funcion

function sumar(a, b) {
    return a+b;
}



console.log(sumar(10, 5));



// listas en rest

var frutas=["manzana", "pera", "naranja"];

console.log(frutas);

//  spread

console.log(...frutas);

// funcion anonima o callbacks

function suma(a, b, sumaYmuestra, sumaPordos) {
    var suma=a+b;
    sumaYmuestra(suma);
    sumaPordos(suma);
}

suma(10, 5,
    /* funciones callback o anonimas*/
    function (dato) {
        console.log(dato);
    }
    , function (dato) {
        console.log(dato*2);
    }
);

// funciones flecha

suma(10, 5,
    /* funciones callback pero en flecha*/
    (dato) => {
        console.log(dato);
    }
    , (dato) => {
        console.log(dato*2);
    }
);

// funciones para procesar datos

var numero=20;

console.log(numero.toString());

var nombre="nelson";

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.length);
for (var i=0; i<nombre.length; i++) {
    console.log(nombre.charAt(i));
}

var texto1 ="hola mundo prueba este es un texto de prueba";
var texto2="   para la prueba de la funcion";

var busqueda = texto1.lastIndexOf("texto");

var search1 = texto1.search("prueba");

console.log(busqueda);

console.log(search1);

var match = texto1.match("prueba");
console.log(match);

var replace = texto1.replace("prueba", "reemplazo");

console.log(replace);

var substr = texto1.substr(6, texto1.length-4);

console.log(substr);

var starW = texto1.startsWith("hola mundo");

console.log(starW);

var includ = texto1.includes("prueba 2");

console.log(includ);


var split = texto1.split(" ");

console.log(split);

var trim = texto2.trim();
console.log(trim);

// plantillas 

var ar=` xdxdxdxdd ${nombre}  `;
console.log(ar);
