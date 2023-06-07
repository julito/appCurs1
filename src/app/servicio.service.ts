import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public URL="http://miempresajulio87.com/";

  constructor(public route : Router,private http:HttpClient) { }

  navegarA(url: string)
{
  this.route.navigateByUrl(url);
}

getDatos()
  {
    return this.http.get("https://conciergehotline.net/api/productos?select=*");
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
