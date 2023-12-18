import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Master en Javascript';
  public description = 'Aprendiendo Angular';
  public config;


  constructor( ) {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.description = Configuracion.descripcion;
  }

}
