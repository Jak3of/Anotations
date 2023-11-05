'use strict';

var pelicula1 = {
    nombre: 'Batman vs Superman',
    year: 2016,
    pais: 'Estados Unidos',
    director: 'Matt Reeves'
};

var pelicula2 = {
    nombre: 'El Padrino',
    year: 1972,
    pais: 'Estados Unidos',
    director: 'Francis Ford Coppola'
}

var peliculas = [pelicula1, pelicula2];

console.log(peliculas);

// mostrar en pantalla

var mostrar = document.getElementById('mostrar');

localStorage.setItem('peliculas', JSON.stringify(peliculas));



var peliculaslocal = JSON.parse(localStorage.getItem('peliculas'));

function mostrarPeliculas(peliculaslocal) {
    var pelis = '';
    pelis = "<h2> Informacion de las peliculas</h2>";

for (var pelicula of peliculaslocal) {
    pelis += `<ul>
    <li>Nombre: ${pelicula.nombre}</li>
    <li>Año: ${pelicula.year}</li>
    <li>Pais: ${pelicula.pais}</li>
    <li>Director: ${pelicula.director}</li>
</ul>`
}

mostrar.innerHTML = pelis;

}

mostrarPeliculas(peliculaslocal);



// mostrar.innerHTML += `<h2> Informacion de las peliculas</h2>`;

// peliculaslocal.forEach((pelicula) => {
//     mostrar.innerHTML += `<ul>
//     <li>Nombre: ${pelicula.nombre}</li>
//     <li>Año: ${pelicula.year}</li>
//     <li>Pais: ${pelicula.pais}</li>
//     <li>Director: ${pelicula.director}</li>
// </ul>`
// })


localStorage.removeItem('peliculas');


// añadir peliculas a la lista


var form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var pelicula = {
        nombre: document.querySelector('#pelicula').value,
        year: document.querySelector('#year').value,
        pais: document.querySelector('#pais').value,
        director: document.querySelector('#director').value
    }
    peliculas.push(pelicula);
    mostrarPeliculas(peliculas);
})





