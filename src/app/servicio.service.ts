import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public URL="http://miempresajulio87.com/";

  constructor(public fire:AngularFirestore, public route : Router,private http:HttpClient) { }

  navegarA(url: string)
{
  this.route.navigateByUrl(url);
}

nuevoComentario<modelo>(datos:modelo,coleccion:string)
  {
    const item: AngularFirestoreCollection<modelo>=
           this.fire.collection<modelo>(coleccion);
    return item.add(datos);
  }

  nuevoServicio<modelo>(datos:modelo,coleccion:string)
  {
    const item: AngularFirestoreCollection<modelo>=
           this.fire.collection<modelo>(coleccion);
    return item.add(datos);
  }

  getPost<modelo>(url:string):Observable<modelo[]>{
    const data=this.fire.collection<modelo>(url);
    return data.valueChanges();
  }


getDatos()
  {
    return this.http.get("https://conciergehotline.net/api/productos?select=*");
  }
  getReservaciones()
  {
    return this.http.get("https://conciergehotline.net/api/reservaciones?select=*");
  }

  postDatos(tabla:string,datos:any)
  {
    return this.http.post(this.URL+"?tabla="+tabla,datos)
  }

  postrestinv(datos:any)
  {
    return this.http.post(this.URL+"?accion=restInv",datos)
  }
}
