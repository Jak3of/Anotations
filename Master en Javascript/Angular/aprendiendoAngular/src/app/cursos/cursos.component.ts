import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public nombre: string='nombre';
  public identificado: boolean=false;

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // Se suscribe a los cambios en los parámetros de la ruta 
      //y asigna el valor del parámetro nombre a la propiedad nombre del componente.
      this.nombre=params['nombre'];
      console.log(this.nombre);

      if(this.nombre != '' && this.nombre != undefined) {
        this.identificado=true;
      } else {
        this.identificado=false;
      }
      console.log(this.identificado);
      console.log(params);
    });
  }

  

  identificarse() {
    
    if( this.nombre != '' && this.nombre != undefined && this.nombre != 'undefined' && this.nombre != null && this.nombre != 'null') {
      this.identificado=true;
      this.router.navigate([`cursos/${this.nombre}`]);
    } else {
      this.router.navigate([`cursos`]);
    }
    

  }

  desconectar() {
    this.identificado=false;
    this.router.navigate([`cursos`]);
  }

}
