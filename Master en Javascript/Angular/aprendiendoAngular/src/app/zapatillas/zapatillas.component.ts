import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

  public title = 'Componente de Zapatillas';

  public zapatillas: Zapatilla[] = [];
  public mi_marca!: string;

  public marcaSeleccionada: string = "Todas las marcas";

  


  public zapatillasMarcas: Array<string> = [
  ]

  constructor(public zapatillaService: ZapatillaService) {

    
    
  }

  ngOnInit() {
    this.zapatillaService.getZapatillas().subscribe(
      zapatillas => {
        // iniciar todas las zapatillas
        this.zapatillas = zapatillas;

        // iniciar todas las marcas sin repeticiones
        // si hubiera un endpoint lo podriamos obtener de ahi
        zapatillas.forEach((zapatilla) => {
          if (!this.zapatillasMarcas.includes(zapatilla.marca)) {
            this.zapatillasMarcas.push(zapatilla.marca);
          }
        })
        console.log(this.zapatillas);
      },
      error => console.log(error)
    );



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
