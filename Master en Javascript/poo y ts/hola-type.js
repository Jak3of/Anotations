//importar class Camiseta
// string
var nombre = 'Nelson';
// number
var edad = 25;
// boolean
var casado = false;
// any
var superHeroe = 'Flash';
superHeroe = 10;
superHeroe = true;
// doble tipado
var superHeroe2 = 'Flash';
superHeroe2 = 10;
//superHeroe2 = true;
// array
var superHeroes = ['Ironman', 'Loki', 'Spiderman'];
superHeroes.push('Hulk');
var superHeroes2 = ['Ironman', 'Loki', 'Spiderman'];
superHeroes2.push('Hulk');
// tuple
var parejaHeroes = ['Ironman', 'Loki'];
// enum
var Color;
(function (Color) {
    Color[Color["ROJO"] = 0] = "ROJO";
    Color[Color["VERDE"] = 1] = "VERDE";
    Color[Color["AZUL"] = 2] = "AZUL";
})(Color || (Color = {}));
console.log(Color.ROJO.toString());
// void
function saludar() {
    console.log('Hola');
}
function getNumero(numero) {
    return "El numero es: " + numero;
}
