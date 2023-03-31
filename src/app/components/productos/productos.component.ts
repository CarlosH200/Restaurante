import { Component } from '@angular/core';
import { ProductosInterface } from 'src/app/interfaces/productos.interface';
import { listaProductos } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: ProductosInterface[] = listaProductos;


}
