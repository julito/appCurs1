import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-ventasconcierge',
  templateUrl: './ventasconcierge.page.html',
  styleUrls: ['./ventasconcierge.page.scss'],
})
export class VentasconciergePage implements OnInit {

  constructor(public funciones:ServicioService,public servicio:ServicioService) { }

  public ventas:any;
  async ngOnInit() {
    
    this.servicio.getReservaciones()
    .subscribe((data:any)=>{
      this.ventas=data.results; 
      console.log(this.ventas);   
    })
      }

  navegarA(url:string)
  {
    this.funciones.navegarA(url);
  }

   

}
