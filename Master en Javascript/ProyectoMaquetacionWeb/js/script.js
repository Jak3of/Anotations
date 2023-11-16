
$(document).ready(function(){
    
    $('label').append(':<span class="req">*</span>');

    
    // slider
    
    var bxslider = $('.bxslider')

    bxslider.bxSlider({
        //mode: 'fade',
        captions: true,
        slideWidth: 1500,
        responsive: true,
        // loop infinite auto noclick
        auto : true,
        infiniteLoop: true,
        slideMargin: 0,
        pager: false,
        pause: 3000,
        stopAutoOnClick: false,
        controls: false,
        autoStart: true,
        autoDelay: 3000,
        clickSlide: false
    })

    // posts
    var post = [
        {
            title: "Descubrimientos Asombrosos en las Profundidades del Océano",
            date: `Publicado el día ${moment().format("LL")}`,
            content: "Un equipo de científicos marinos ha hecho un descubrimiento extraordinario en las profundidades del océano. Se encontraron nuevas especies de criaturas marinas nunca antes vistas y se exploraron formaciones geológicas sorprendentes. Este hallazgo promete revelar más sobre los misterios del mundo subacuático."
        },
        {
            title: "Inteligencia Artificial en la Medicina: Transformando la Atención Sanitaria",
            date: `Publicado el día ${moment().format("LL")}`,
            content: "La integración de la inteligencia artificial en el campo de la medicina está revolucionando la atención sanitaria. Desde diagnósticos más precisos hasta la personalización de tratamientos, la IA está marcando un hito en la forma en que abordamos la salud. Conversamos con expertos en el campo para comprender mejor el impacto y el futuro de esta tecnología."
          },
          {
            title: "Explorando Nuevos Horizontes Espaciales: La Misión hacia Marte",
            date: `Publicado el día ${moment().format("LL")}`,
            content: "Las agencias espaciales de todo el mundo están uniendo fuerzas en una misión histórica hacia Marte. Exploraremos la posibilidad de vida en el planeta rojo, analizaremos la viabilidad de la colonización y nos sumergiremos en los desafíos tecnológicos que implica este ambicioso viaje. Únete a nosotros mientras desentrañamos los secretos del cosmos."
        },
        {
            title: "El Renacimiento de la Energía Sostenible",
            date: `Publicado el día ${moment().format("LL")}`,
            content: "En un mundo que busca soluciones para la crisis climática, presenciamos el renacimiento de la energía sostenible. Desde innovadores avances en paneles solares hasta la revolución de la movilidad eléctrica, exploraremos cómo las tecnologías verdes están dando forma a un futuro más limpio y sostenible. Hablamos con líderes de la industria y expertos para comprender los cambios que están transformando nuestra forma de consumir energía."
          },
          {
            title: "Misterios Arqueológicos: Descubrimientos Recientes en Ruinas Antiguas",
            date: `Publicado el día ${moment().format("LL")}`,
            content: "Expediciones arqueológicas recientes han revelado secretos enterrados durante siglos en ruinas antiguas. Desde artefactos misteriosos hasta inscripciones enigmáticas, exploraremos los hallazgos más fascinantes y las teorías que los rodean. Los arqueólogos comparten sus experiencias en el campo y cómo estos descubrimientos están reescribiendo nuestra comprensión de la historia antigua."
          }
    ];

    post.forEach(function(item){
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
        `;
        $('#posts').append(post);
    })


    // selector de tema
    // to-green es green.css
    // to-red es red.css
    // to-blue es blue.css

    var theme = $('#theme')

    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css');
    })

    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css');
    })

    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css');
    })

    $('#to-white').click(function(){
        theme.attr('href', 'css/white.css');
    })


    $('.subir').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 250);
    })

    $('#login form').submit(function(){
        var form_name = $('#name').val();
        var form_email = $('#email').val();
        var form_password = $('#password').val();
        
        localStorage.setItem('form_name', form_name);
        localStorage.setItem('form_email', form_email);
        localStorage.setItem('form_password', form_password);
        

    })


    $("#logout").click(function(){
        localStorage.clear();
        localStorage.removeItem('form_name');
        localStorage.removeItem('form_email');
        localStorage.removeItem('form_password');

        // para recargar la página
        window.location = 'index.html';
    })

    // los localStorage se guardan en el navegador del usuario y no en el servidor
    // se pueden recuperar incluso despues que la pagina se halla cerrado
    
    var form_name = localStorage.getItem('form_name');
    var form_email = localStorage.getItem('form_email');
    var form_password = localStorage.getItem('form_password');

    if(form_name != null && form_email != null && form_password != null){
        $('#login').hide();
        $('#about').show();
        $('#about p').html('¡Bienvenido, ' + form_name + '!');



    } else {
        $('#login').show();
        $('#about').hide();

    }






})