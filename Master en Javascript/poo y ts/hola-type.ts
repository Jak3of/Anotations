
// string

let nombre: string = 'Nelson';

// number

let edad : number = 25;

// boolean

let casado: boolean = false;

// any

let superHeroe: any = 'Flash';

superHeroe = 10;

superHeroe = true;

// doble tipado

let superHeroe2: string | number = 'Flash';

superHeroe2 = 10;

//superHeroe2 = true;




// array

let superHeroes: string[] = ['Ironman', 'Loki', 'Spiderman'];

superHeroes.push('Hulk');

let superHeroes2: Array<string> = ['Ironman', 'Loki', 'Spiderman'];

superHeroes2.push('Hulk');

// tuple

let parejaHeroes: [string, string] = ['Ironman', 'Loki'];

// enum

enum Color {
    ROJO,
    VERDE,
    AZUL
}


console.log(Color.ROJO.toString());

// void

function saludar(): void {
    console.log('Hola');
}


function getNumero(numero: number): string {
    return "El numero es: " + numero;
}










