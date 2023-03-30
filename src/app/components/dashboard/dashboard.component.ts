import { Component } from '@angular/core';
import { ModulesInterface } from 'src/app/interfaces/modules.interface';
import { listaModulos } from 'src/app/services/modules.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {

  constructor() {
    this.getModulos();
  }

//Variable almacena listado de modulos
modulos: ModulesInterface[] = listaModulos;
nameEmpresa: string = "TECHSOFT. S.A";


getModulos(){
  for (let index = 0; index < this.modulos.length; index++) {
    const modulo  = this.modulos[index];
    console.log(modulo.descripcion);
  }  
}




}
