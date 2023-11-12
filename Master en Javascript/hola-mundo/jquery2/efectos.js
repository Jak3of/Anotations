

$(document).ready(function(){

    caja = $("#caja");

    
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo("slow", 1);
    })

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo("slow", 0);
    })


    $("#fade").click(function(){
        caja.fadeToggle('fast');
    })

    $("#animar").click(function(){
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, "fast").animate({
            borderRadius: '900px',
            marginTop: '80px'
        }, "slow").animate({
            borderRadius: '0px',
            marginLeft: '0px'
        }, "slow").animate({
            marginTop: '0px'
        }, "fast", function(){
            console.log("animacion terminada");
        })
    })

})

