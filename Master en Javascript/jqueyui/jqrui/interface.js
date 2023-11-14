

$(document).ready(function(){
    
    var elemento = $(".elemento");

    // mover los elementos por la pantalla
    elemento.draggable();

    // redimensionar los elementos
    elemento.resizable();

    var lista = $(".lista-seleccionable");

    // seleccionar  elementos
    //lista.selectable();

    // ordenar elementos

    lista.sortable(
        {
            update: function( event, ui ) {
                console.log( ui.item );
            }
        }
    );

    var elementoMovido = $("#elemento-movido");

    var area = $("#area");

    // arrastrar y soltar

    area.droppable({
        over: function( event, ui ) {
            area.css("background", "lightgreen");
        }

        ,out: function( event, ui ) {
            area.css("background", "lightblue");
        }
    })

    elementoMovido.draggable({
        // revert: true

    })

    var cajaEfectos = $(".caja-efectos");

    $("#mostrar").click(function(){
        cajaEfectos.toggle("shake", 300);
    })
    // efectos 
    // slide , explode, blind, clip, scale, fade, border, clip
    // puff, shake, size, slide, scale, fade, border, clip
    // , velocidad en milisegundos



    // tooltip

    $("#mis-datos").tooltip();

    $("a").tooltip();

    // dialog

    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    })

    // datepicker

    $("#calendario").datepicker();

    // tabs

    $("#pestanas").tabs();


})