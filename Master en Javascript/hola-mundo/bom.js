'use strict';

// haciendo esto puede colocar el script en el head e igual funciona
// por que carga el script al cargar la pagina
window.addEventListener("load" , () => {
    function getBom() {
        console.log(screen.width);
        console.log(screen.height);
        console.log(window.location);
    }
    
    function redirect(url) {
        window.location.href = url;
    }
    
    function abrirPestaña(url) {
        window.open(url,"","width=300,height=300");
    }
    
    
    getBom();
    
    // eventos de la pagina
    
    // capturar el boton
    
    var btn = document.getElementById("boton");
    
    
    
    function cambiarColor() {
        // if 
        if (btn.style.background == "red") {
            btn.style.background = "blue";
        } else {
            btn.style.background = "red";
        }
    }
    
    
    
    btn.addEventListener("click", function() {
        btn.style.color = "white";
        cambiarColor();
    })
    
    
    // hover 
    
    btn.addEventListener("mouseover", function() {
        document.body.style.background = "#ccc";
    })
    
    btn.addEventListener("mouseout", function() {
        document.body.style.background = "white";
    })
    
    // querySelector
    var input = document.querySelector("#campo_nombre");
    
    
    // focus
    
    input.addEventListener("focus", function() {
        input.style.background= "red";
    })
    
    
    
    
    // blur  quitar el focus
    
    input.addEventListener("blur", function() {
        input.style.background= "white";
    })
    
    // keydown
    
    input.addEventListener("keydown", function(event) {
        console.log(event.key);
    })
    
    
    // keypress
    
    input.addEventListener("keypress", function(event) {
        console.log(event.key.toUpperCase());
    })
    
    
    // keyup
    
    
    input.addEventListener("keyup", function(event) {
        console.log(event.key + "keyup");
    })
})


