
// Variables y Constantes


// const nombre = 'David';
// const apellido = 'Fernandez';

// let valorDado = 5;
// valorDado = 4;

// console.log(nombre, apellido, valorDado)

// if (true) {
//     let valorDado = 6;
//     const nombre = 'Peter';
//     console.log(valorDado, nombre);
// }

// console.log(valorDado);

// const nombreCompleto = nombre + ' ' + apellido;

// const nombreCompleto2 = `${nombre} ${apellido}`;

// console.log('Hola ' + nombreCompleto);

// console.log(`Hola ${nombreCompleto2}`);

// function getSaludo() {
//     return 'Hola '+ nombre;
// }

// console.log(`Este es un saludo: ${getSaludo()}`);


// class Persona {
//     constructor (nombre, apellido, altura, edad) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.altura = altura;
//     }

//     saludar() {
//         console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
//     }

//     soyAlto() {
//         return this.altura > 1.8;
//     }
// }


// const dario = new Persona('Dario', 'Fernandez', 1.85, 35);
// dario.saludar();
// console.log(dario.soyAlto() ? 'Soy alto' : 'No soy alto');


// const persona  = {
//     nombre: 'Tony',
//     apellido: 'Stark',
//     edad: 45,
//     altura: 1.75,
    
// }

// convertir el objeto persona a una clase



// var persona2 = new Persona(
//     persona.nombre, persona.apellido, persona.altura, persona.edad
// );

// console.log(persona)
// console.log(persona2)


// const objet = new Object( {
//     nombre: 'Tony',
//     apellido: 'Stark',
//     edad: 45,
//     altura: 1.75
// });

// const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3); //push modifica el arreglo original

// let arreglo2 = [...arreglo, 5];

// arreglo2 = arreglo2.map( x => {
//     return x * 2
// });


// console.log(arreglo2);


// const saludar = function saludar( nombre = 'David') {
//     return 'Hola '+ nombre;
// }

// console.log(saludar);

// console.log(saludar('Peter'));

// const saludar2 = ( nombre = 'David') => {
//     return 'Hola '+ nombre;
// }

// console.log(saludar2('Peter'));

// const saludar3 = () => 'Hola mundo';

// console.log(saludar3());


// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

// const usuarioActivo = getUsuarioActivo('Peter');
// console.log(usuarioActivo);

// // convirtiendo a funcion flecha

// const getUsuarioActivo2 = (nombre) => {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }
// const usuarioActivo2 = getUsuarioActivo2('peter');

// console.log(usuarioActivo2);

// console.log(usuarioActivo === usuarioActivo2)

// desestructuracion

// const persona = {
//     nombre:'Tony',
//     edad: 45 ,
//     clave:'Ironman',
//     rango: 'Soldado'
// };

// // extraccion 


// const retornarPersona = ({nombre , edad ,clave , rango = 'Capitan'}) =>{ 
    
//     // const {nombre , edad , clave} = persona; 
//     // console.log(edad,clave,nombre, rango)

//     return {
//         nombreClave: clave,
//         anios: edad,
//         latlng : {
//             lat: 14.23234,
//             lng : -24.3432
//         }
//     }

// }


// const {nombreClave, anios, latlng : { lat , lng}} = retornarPersona(persona)

// console.log(nombreClave, anios , lat , lng);


// desestructuracion de arreglos 

// const personajes = [ 'Goku', 'Vegeta' , 'Trunks'];

// const [,,p3] = personajes;

// console.log( p3 );


// const retornaArreglo = ( ) => {
//     return ['ABC' , 123];
// }

// const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros)

// const u1seState = (valor) =>
// {
//     return [valor, ()=>{ 
//         console.log('Hola mundo')
//     }]
// }
// const [nombre, setNombre] = u1seState('Goku');

// console.log(nombre)
// setNombre()


// import heroes , { owners }  from './data/heroes' 
// const getHeroeById = (id) => {
//     return heroes.find( 
//         (heroe) =>  heroe.id === id
//     );
// }
// const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)



// console.log(getHeroeById(2))


// console.log(getHeroeByOwner('Marvel'))








// const promesa = new Promise(
//     (resolve , reject) => {
//         setTimeout(() => {

//             // const heroe = getHeroeById(2);

//             const heroe = getHeroeById(6);

//             heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe')
//             console.log(heroe)

//         }, 2000);
//     }
// );

// promesa.then(
//     (heroe) => {
//      console.log('then de la promesa', heroe)  
//     }
// ).catch(
//     (err) => {
//         console.warn(err)
//     }
// );



// const getHeroeByIdAsync = (id) => {
//     const promesa = new Promise(
//         (resolve , reject) => {
//             setTimeout(() => {
    
//                 // const heroe = getHeroeById(2);
    
//                 const heroe = getHeroeById(id);
    
//                 heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe')
                
    
//             }, 2000);
//         }
//     );
//     return promesa;
// }


// getHeroeByIdAsync(1).then(
//     console.log 
    
// ).catch( console.warn)



//fetch API

// const apiKey = 'bfwqsSYhjQ1N2sZNgKRzX21K6L7Z9qb'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//     .then(res => res.json())
//     .then(({data}) => 
//         {
//             const {url} = data.images.original;
//             const img = document.createElement('img')
//             img.src = url;

//             document.body.append(img)
//         }
//     )
//     .catch(console.warn);


// // async await
// const getImagen = async() => {
//     try {
//         const apikey = 'bfwqsSYhjQ1N2sZNgKRzX21K6L7Z9qb';
//     const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
//     const {data} = await res.json();

//     const {url} = data.images.original;

//     const img = document.createElement('img');

//     img.src = url;

//     document.body.append(img);
//     } catch (error) {
//         console.error(error)
//     }

// }


// getImagen();

// ternario 
// const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'activo'

// } else {
//     mensaje = 'inactivo'
// }

// const mensaje = activo ? 'Activo' : 'Inactivo';
// const mensaje = activo ? 'Activo' : null;
// const mensaje = activo && 'Activo';

// console.log(mensaje);







