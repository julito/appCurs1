import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public ser:ServicioService) { }
  datos:any;

 async ngOnInit() {
this.ser.getDatos()
.subscribe((data:any)=>{
  console.log(data)
  
})
  }

}
