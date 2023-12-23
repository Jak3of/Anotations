'use strict';

// me pido los dos primeros argumentos
var params = process.argv.slice(2);

var a = parseFloat(params[0]);
var b = parseFloat(params[1]);

var plantilla = `
Suma: ${a + b}
Resta: ${a - b}
Multiplicacion: ${a * b}
Division: ${a / b}
`;

console.log(plantilla);
