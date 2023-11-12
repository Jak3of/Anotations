'use strict';

// fetch y peticiones a servicios https://jsonplaceholder.typicode.com/users

const url = 'https://jsonplaceholder.typicode.com/users';

// div usuarios

const divUsuarios = document.querySelector('#usuarios');

// fetch (ajax) es una funcion que se encarga de hacer peticiones HTTP
// then realiza un callback para convertir la respuesta en un json
// then.then es otro callback que recibe el json como parametro para ejecutar una accion
getUsuarios()
    .then(response => response.json())  
    .then(data => {
        mostrarUsuarios(data);
        // return para que devuelva otro fetch y seguir ejecutando el .then
        return getInfo();
        
    })
    .then(data => {
        mostrarUsuarios([JSON.parse(data)]);
        return getUsuarioById(2);
    })
    .then( data => data.json())
    .then(data => {
        mostrarUsuarios([data]);
        
    })
    .catch(error => {
        console.log(error + ' error en la peticion');
    })
    // then se resuelve de forma asincrona por lo que espera a ejecutarce uno por uno

function getUsuarios(){
    return fetch(url);
}

// crear nueva promesa
function getInfo() {
     var alumno = {
        name: 'Nelson',
        lastname: 'Correa',
        email: 'nelsonc897@gmail.com'
     }
    return new Promise((resolve, reject) => {
        var alumno_string = "";
        setTimeout(() => {
            alumno_string = JSON.stringify(alumno);
            if (typeof alumno_string != 'string'|| alumno_string == "") {
                return reject('error');
            }
            return resolve(alumno_string);
        },3000 )
        
        
    });
}

function getUsuarioById(id){
    return fetch(`${url}/${id}`);
    
}


function mostrarUsuarios(usuarios){
    usuarios.map((user) => {
        divUsuarios.innerHTML += `
            <div>
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
        `
    })
}