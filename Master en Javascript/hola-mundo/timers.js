'use strict';

window.addEventListener('load',() => {



    function intervalo() {
        var tiempo=setInterval(
            () => {
                document.querySelector('#reloj').innerHTML=new Date().toLocaleTimeString();
            }
            , tiempo? 0:1000);
        return tiempo
    }



    // boton para y si le doy otra vez vuelve a empezar 

    var btn = document.querySelector('#boton');
    btn.innerHTML = 'Start';

    var tiempo;
    btn.addEventListener('click', () => {
        if (btn.innerHTML == 'Start') {
            btn.innerHTML = 'Stop';
            tiempo =intervalo();
        } else {
            btn.innerHTML = 'Start';
            clearInterval(tiempo);
        }
    })



})