import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentastravelPageRoutingModule } from './ventastravel-routing.module';

import { VentastravelPage } from './ventastravel.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentastravelPageRoutingModule,
    ComponentesModule
  ],
  declarations: [VentastravelPage]
})
export class VentastravelPageModule {}
