import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-ventasconcierge',
  templateUrl: './ventasconcierge.page.html',
  styleUrls: ['./ventasconcierge.page.scss'],
})
export class VentasconciergePage implements OnInit {

  constructor(public funciones:ServicioService) { }

  ngOnInit() {
  }

  navegarA(url:string)
  {
    this.funciones.navegarA(url);
  }

}
