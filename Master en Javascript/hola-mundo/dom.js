'use strict';


// DOM - Document Object Model

// lee el HTML y lo convierte en un arbol de nodos
// 


function cambiarColor(color) {
    caja.style.background = color;
}

// se seleccionara un elemento 

var caja = document.getElementById('caja');


// se seleccionara el texto de un elemento
caja.innerHTML = 'TExto en la caja desde js !!!!!';

caja.style.background = 'red';



caja.style.padding = '20px';
caja.style.color = 'white';




var cajaquery = document.querySelector('#caja');

cajaquery.innerHTML = 'Texto cambiado por query selector !!!!!';

console.log(caja);



var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector('#miseccion');

var hr = document.createElement('hr');

seccion.append(hr);

var valor;

for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var p = document.createElement('p');
        var text = document.createTextNode(todosLosDivs[valor].textContent);
        p.append(text);
        seccion.append(p);
    }
}

var divs = document.querySelectorAll('div');

 var div;

for (div in divs) {
    // div me selecciona varios elementos
    if (divs[div].tagName == 'DIV' ){
        if ( divs[div].className == 'rojo') {
            divs[div].style.background = 'red';
        
            } else if (divs[div].className == 'amarillo') {
                divs[div].style.background = 'yellow';
            } else if (divs[div].className == 'azul') {
                divs[div].style.background = 'blue';
            } else {
                divs[div].style.background = 'green';
            }
    }
}





