// selector     . metodos (    funcion de callback )
$(document).ready(function(){
    var body = $("body");
    $("body").append("<h1>Aprendiendo Jquery</h1>");
    $("body").append("<p id='rojo'> Ejercicios de Jquery</p>");
    $("body").append("<p id='amarillo' class='zebra'> Practicando con Selectores</p>");
    $("body").append("<p id='verde'> Quiero ser un parrafo verde</p>");

    $("body").append("<p class='zebra'> Soy un parrafo blanco</p>");
    

    // seleccionando con ids

    var rojo = $("#rojo").css("color","red");
    var amarillo = $("#amarillo").css("color","yellow");
    var verde = $("#verde").css("color","green");

    // darle background black a los parrafos

    $("p").css("background","#ccc").css("width","300px");

    // seleccionar clase

    $(".zebra").css("border"," 5px dashed black");

    $("p").click(function(){
        console.log($(this).css("background-color"));
        // si el background es #ccc entonces ponerlo pink
        if($(this).css("background-color")=="rgb(255, 192, 203)"){
            $(this).css("background-color","rgb(204, 204, 204)");
            
        } else {
            $(this).css("background-color","rgb(255, 192, 203)");
        }
    })


    // lista de sitios web google facebook y youtube

    $("body").append("<ul>");
    $("ul").append("<li><a href='https://google.com' title='Google'>Ir a Google</a></li>");
    $("ul").append("<li><a href='https://facebook.com' title='Facebook'>Ir a Facebook</a></li>");
    $("ul").append("<li><a href='https://youtube.com' title='Youtube'>Ir a Youtube</a></li>");
    $("ul").append("</ul>");

    // seleccionar todos los enlaces con el atributo title

    $('[title="Google"]').css("color","red");
    $('[title="Facebook"]').css("color","blue");
    $('[title="Youtube"]').css("color","yellow");

    // otros 

    


    // $('p,a').addClass("margen-superior");

    $('.margen-superior').css("display","block").css("margin-top","45px");

    




    

})

