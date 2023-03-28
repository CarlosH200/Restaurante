import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { users } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //permitirá que la función navigate si tenga una referencia válida.
  constructor(private router: Router) { }

  //variable para almacenar usuario ingresado
  inputUser = "";
  //variable para almacenar contraseña ingresada
  inputPassword = "";
  //variable quue autoriza inicio segun su valor
  isLogin: boolean = false;

  us: string = "sa"
  ps: string = "123"
  roauter: any;

  //Funcion para validar inicio de sesion
  isLoggin(user: string, password: string) {
    if (user === this.us && password === this.ps) {
      this.isLogin = true;
      this.router.navigate(['dashboard']); // Navega a Login si iLogion es valido
    } else {
      return;
    }
  }

}




