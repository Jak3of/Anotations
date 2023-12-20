import { Component, DoCheck, OnInit } from '@angular/core';
import { Configuracion } from './models/configuracion';
import { User } from './models/user';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'Master en Javascript';
  public description = 'Aprendiendo Angular';
  public config;

  public fecha = new Date();

  public identificado = false;


  constructor( private loginService: LoginService, private router: Router) {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.description = Configuracion.descripcion;
  }

  ngOnInit() {
    if (localStorage.getItem('session') != null) {
      this.identificado = true;
    }
  }

  ngDoCheck() {
    if (localStorage.getItem('session') != null) {
      this.identificado = true;
    }
    console.log('DoCheck ejecutado - componente raiz');
  }

  desconectar() {
    let user: User = new User("", "", "", "", "", 0, "", "", "");
    this.loginService.login(user).subscribe(
      (res) => {
        console.log(res);
        
      }, 
      (err) => {
        localStorage.removeItem('session');
        this.identificado = false;
        this.router.navigate(['/login']);
      }
    );
  }




}
