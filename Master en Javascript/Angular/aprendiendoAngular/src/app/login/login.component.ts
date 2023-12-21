import { Component } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user!: User;

  constructor( public loginService: LoginService , public router: Router) {
    
  }


  /* username: 'kminchelle',
    password: '0lelplR', */
  login(loginForm: any): void {
    if (loginForm.valid) {
      this.user = loginForm.value;
      this.loginService.login(this.user).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('session', JSON.stringify(res));
          this.router.navigate(['/profile']);
        }
      );

    }

    
  }

}
