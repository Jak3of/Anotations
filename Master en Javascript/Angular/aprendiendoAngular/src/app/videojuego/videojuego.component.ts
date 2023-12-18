import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'app-videojuego',
    templateUrl: './videojuego.component.html',
    styleUrls: ['./videojuego.component.scss']
}) 
export class VideojuegoComponent implements OnInit,DoCheck {

    title = 'Componente de Videojuegos';

    videojuegos: string[] = ['Grand Theft Auto VI','Mario', 'Zelda', 'Poke'];

    constructor(){
        console.log('Los videojuegos cargados son ', this.videojuegos);

        
    }

    ngOnInit(){
        console.log('OnInit ejecutado');
    }

    ngDoCheck(){
        console.log('DoCheck ejecutado');
    }

    cambiarTitle(){
        this.title = 'Componente de videojuegos cambiado';
    }


    
    
    
}