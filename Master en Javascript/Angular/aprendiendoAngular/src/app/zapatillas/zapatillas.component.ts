import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent {

  public title = 'Componente de Zapatillas';

  public zapatillas: Array<Zapatilla>;
  public nowZapatillas: Array<Zapatilla> ;
  public mi_marca!: string;

  public marcaSeleccionada: string = "Todas las marcas";

  public zapatillasMarcas: Array<string> = [
    'Reebook',
    'Adidas',
    'Puma',
    'New Balance',
    'Vans'
  ]

  constructor( ) {
    this.zapatillas = [
      new Zapatilla( 'Reebook Clasic', this.zapatillasMarcas[0], 'Rojo', 100, true ),
      new Zapatilla( 'Adidas Clasic', this.zapatillasMarcas[1], 'Rojo', 60, true ),
      new Zapatilla( 'Puma Clasic', this.zapatillasMarcas[2], 'Rojo', 100, true ),
      new Zapatilla( 'New Balance Clasic', this.zapatillasMarcas[3], 'Rojo', 70, true ),
      new Zapatilla( 'Vans Clasic', this.zapatillasMarcas[4], 'Rojo', 90, false ),
    ];

   

    this.nowZapatillas = this.zapatillas;


    
    
  }

  addMarca(){
    this.zapatillasMarcas.push(this.mi_marca);
  }

  filtrarZapatillasPorMarca() {

    if (!this.marcaSeleccionada || this.marcaSeleccionada === '' || this.marcaSeleccionada === 'Todas las marcas') {
      return this.zapatillas;
    } else {
    // Filtra las zapatillas según la marca seleccionada
    // Puedes ajustar esta lógica según tus necesidades
    // Por ejemplo, puedes cambiar 'marca' por el nombre de la propiedad que deseas comparar
    return this.zapatillas.filter(zapatilla => zapatilla.marca === this.marcaSeleccionada);
    }
  }

  getmarcaSeleccionada() {
    console.log(this.marcaSeleccionada);
  }

  borrarMarca(marca: string) {
    const index = this.zapatillasMarcas.indexOf(marca);
    if (index !== -1) {
      this.zapatillasMarcas.splice(index, 1);
    }
  }

  



}
