import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-ventastravel',
  templateUrl: './ventastravel.page.html',
  styleUrls: ['./ventastravel.page.scss'],
})
export class VentastravelPage implements OnInit {

  constructor(public funciones: ServicioService) { }

  ngOnInit() {
  }

navegarA(url: string)
{
  this.funciones.navegarA(url);
}

}
