import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public ser:ServicioService) { }
  public datos:any;
  public total:string='';
  

 async ngOnInit() {
this.ser.getReservaciones()
.subscribe((data:any)=>{
  this.datos=data;
 
  this.total=data.total;
  


  
})
  }

}
