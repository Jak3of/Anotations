$(document).ready(function(){
    
    // eventos MouseOver y MouseOut

    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background-color", "red");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background-color", "yellow");
    // })

    // eventos Click y DoubleClick

    caja.click(function(){
        $(this).css("background-color", "cyan");
    });

    caja.dblclick(function(){
        $(this).css("background-color", "blue");
    });

    // Hover

    caja.hover( function() {
        $(this).css("background-color", "green");
    }, function() {
        $(this).css("background-color", "yellow");
    });

    // eventos Focus y Blur

    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border", "5px solid green");
        $("#datos").hide();
    });
    
    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        $("#datos").show().text("Has escrito: " + $(this).val());
        
    });

    // MouseDown y MouseUp

    $("#datos").mousedown(function(){
        $(this).css("background-color", "red");
    });
    
    $("#datos").mouseup(function(){
        $(this).css("background-color", "yellow");
    })

    // mousemove

    $(document).mousemove(function(){
        $("#sigueme").css("cursor", "none");
        $("#sigueme").css("left", event.clientX-10).css("top", event.clientY-10);
    })




})