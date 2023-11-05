'use strict';

// 1. Formulario campos : nombre , apellidos y edad

// 2. Boton enviar el formulario: eventos submit;

// 3. Mostrar datos en pantalla

// 4. Tener un boton que al darle click nos meustre los datos actuales de formulario

// 5. validar todos los datos

window.addEventListener('load', () => {


    const form=document.getElementById('form');
    const nombre=document.getElementById('nombre');
    const apellidos=document.getElementById('apellidos');
    const edad=document.getElementById('edad');
    const mostrar=document.getElementById('mostrar');

    mostrar.innerHTML="Ingrese sus datos";


    form.addEventListener('submit', (event) => {
        if (nombre.value==""||apellidos.value==""||edad.value==""||nombre.value==null||apellidos.value==null||edad.value==null) {
            event.preventDefault();
            mostrar.innerHTML="Por favor rellene todos los campos";

        } else if (edad.value <- 0||isNaN(edad.value)) {
            event.preventDefault();
            mostrar.innerHTML="La edad no es valida";

        } else {
            event.preventDefault();
            mostrar.innerHTML=`
            <h2> Informacion del usuario</h2>
            <p>Nombre: ${nombre.value}</p>
            <p>Apellidos: ${apellidos.value}</p>
            <p>Edad: ${edad.value}</p>
            `;

        }

    })

    const boton=document.getElementById('borrar-datos');

    boton.addEventListener('click', () => {
        form.reset();
        // hacer que despues de borrar los datos diga "datos borrados" por 2 segundos y luego "ingrese sus datos"
        mostrar.innerHTML="Datos borrados";
        // seTimeout se utiliza para hacer un retraso
        setTimeout(() => {
            mostrar.innerHTML="Ingrese sus datos";
        } , 2000);
    })


    // operador this 







})
