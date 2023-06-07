import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentastravelPageRoutingModule } from './ventastravel-routing.module';

import { VentastravelPage } from './ventastravel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentastravelPageRoutingModule
  ],
  declarations: [VentastravelPage]
})
export class VentastravelPageModule {}
