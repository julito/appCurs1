import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  public datosP: any[] = [];
  public datos={
    id:'',
    nombre:'prueba',
    clave:''
  }
  constructor(public servi:ServicioService,public toast: ToastController) { }

  ngOnInit() {
    this.getPost();
  }


  enviarComentario()
  {
    this.servi.nuevoComentario(this.datos,'Usuarios')
    this.mostrarToast();
  }

  async mostrarToast() {
    const toast = await this.toast.create({
      message: 'Dato enviado.',
      duration: 2000,
    });
    toast.present();
    
  }
  
  getPost()
  {
    this.servi.getPost('Usuarios')
    .subscribe((data:any)=>{
this.datosP=data;

      console.log(this.datosP)
     
    })
  }


}
