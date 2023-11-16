
$(document).ready(function () {

    $('label').append(':<span class="req">*</span>');


    // acordedon
    $.validate({
        modules: 'security',
        form: '#contact-form',
        lang: 'es'
    });
    
    


    // selector de tema
    // to-green es green.css
    // to-red es red.css
    // to-blue es blue.css

    var theme=$('#theme')

    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    })

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    })

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    })

    $('#to-white').click(function () {
        theme.attr('href', 'css/white.css');
    })


    $('.subir').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 250);
    })

    $('#login form').submit(function () {
        var form_name=$('#name').val();
        var form_email=$('#email').val();
        var form_password=$('#password').val();

        localStorage.setItem('form_name', form_name);
        localStorage.setItem('form_email', form_email);
        localStorage.setItem('form_password', form_password);


    })


    $("#logout").click(function () {
        localStorage.clear();
        localStorage.removeItem('form_name');
        localStorage.removeItem('form_email');
        localStorage.removeItem('form_password');

        // para recargar la página
        window.location='index.html';
    })

    // los localStorage se guardan en el navegador del usuario y no en el servidor
    // se pueden recuperar incluso despues que la pagina se halla cerrado

    var form_name=localStorage.getItem('form_name');
    var form_email=localStorage.getItem('form_email');
    var form_password=localStorage.getItem('form_password');

    if (form_name!=null&&form_email!=null&&form_password!=null) {
        $('#login').hide();
        $('#about').show();
        $('#about p').html('¡Bienvenido, '+form_name+'!');



    } else {
        $('#login').show();
        $('#about').hide();

    }






})