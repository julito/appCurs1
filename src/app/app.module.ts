import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicioService } from './servicio.service';
import{HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [ AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule, HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [FormControl,ServicioService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
