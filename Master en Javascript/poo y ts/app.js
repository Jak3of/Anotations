

// poo en js

var bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km/h',
    cambiarColor: function(color){
        this.color = color;
    },
    
    toString: function(){
        return 'La bicicleta es de color ' + this.color + ' modelo ' + this.modelo + ' tiene ' + this.frenos + ' frenos y una velocidad maxima de ' + this.velocidadMaxima;
    }
}

console.log(bicicleta);
