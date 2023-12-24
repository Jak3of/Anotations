import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public title: string ;
  public subtitle: string ;
  public web : string;

  constructor(){
    this.title = "Nelson Correa"
    this.subtitle = "Desarrollador Web"
    this.web = "https://nelsoncorrea.com"
  }

}
